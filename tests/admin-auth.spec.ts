import { test, expect } from '@playwright/test'

// These tests require the dev server running at http://localhost:3000
// Authenticated tests will be skipped unless ADMIN_PASSWORD is provided in env

test('redirects unauthenticated user from /admin/upload to /admin/login', async ({ page }) => {
  await page.goto('/admin/upload')
  await expect(page).toHaveURL(/\/admin\/login/) 
})

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD

(ADMIN_PASSWORD ? test : test.skip)('logs in and accesses /admin/upload', async ({ page }) => {
  // POST to login endpoint to set cookie
  const resp = await page.request.post('/api/admin/login', { data: { password: ADMIN_PASSWORD } })
  expect(resp.ok()).toBeTruthy()

  // navigate to upload page, should not redirect
  await page.goto('/admin/upload')
  await expect(page.locator('text=Admin: Upload Documents')).toBeVisible()
  await expect(page.locator('text=Sign out')).toBeVisible()
})
