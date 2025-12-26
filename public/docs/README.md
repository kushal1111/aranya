Please add your official PDF documents here with the following filenames:

- company-registration.pdf
- pan-registration.pdf
- letter-generation.pdf
- signed-moa.pdf
- signed-aoa.pdf

You can now also upload PDFs from the admin page at `/admin/upload` (development convenience). Note: uploads save files into `/public/docs` on the server; many serverless hosts (e.g., Vercel, Netlify) do not persist runtime filesystem changes — prefer external storage (S3) for production deployments.

When files are present, they'll be accessible on the site at `/docs/<filename>.pdf` and visible in the "Get Involved" section.
