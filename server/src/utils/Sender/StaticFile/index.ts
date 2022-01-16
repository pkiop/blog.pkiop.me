import { getFileExtension, getContentType } from '../../../utils/headers.ts';

const __dirname = new URL('.', import.meta.url).pathname;

export async function staticFileSender(
  requestEvent: Deno.RequestEvent
): Promise<void | boolean> {
  const { pathname } = new URL(requestEvent.request.url);
  try {
    const file = await Deno.readFile(`${__dirname}../build${pathname}`);
    const fileExtension = getFileExtension(pathname);
    requestEvent.respondWith(
      new Response(file, {
        headers: {
          'content-type': getContentType(fileExtension),
        },
      })
    );
    return true;
  } catch (err) {
    return false; // not matched 로 가정
  }
}
