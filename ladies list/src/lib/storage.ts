
/**
 * S3-compatible upload stub. In dev, we simply trust client-provided URLs.
 * In prod, implement signed-URL uploads here to your storage provider.
 */
export async function getUploadUrl(filename: string, contentType: string) {
  // TODO: implement with your S3 provider, return { url, fields } for POST.
  return { url: `/api/uploads/dev?filename=${encodeURIComponent(filename)}` };
}
