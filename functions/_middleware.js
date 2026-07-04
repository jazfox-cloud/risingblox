export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (
    url.hostname === "www.risingblox.com" ||
    url.hostname === "risingblox.pages.dev"
  ) {
    url.hostname = "risingblox.com";
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
