type ImageExtension = 'svg' | 'png' | 'jpg' | 'webp';
type TextExtension = 'html' | 'css' | 'txt';
type ApplicationExtension = 'js';
type Extension = ImageExtension | TextExtension | ApplicationExtension;

const imageExtensions: ImageExtension[] = ['svg', 'png', 'jpg', 'webp'];
const textExtensions: TextExtension[] = ['html', 'css', 'txt'];
const applicationExtensions: ApplicationExtension[] = ['js'];

const extensionToContentType = {
  js: 'javascript',
};

export const getContentType = (ext: Extension): string => {
  if (imageExtensions.some((imageExtension) => imageExtension === ext)) {
    if (ext === 'svg') return `image/svg+xml`;
    return `image/${ext}`;
  }
  if (textExtensions.some((textExtension) => textExtension === ext)) {
    return `text/${ext}`;
  }
  if (
    applicationExtensions.some(
      (applicationExtension) => applicationExtension === ext
    )
  ) {
    if (ext in extensionToContentType) {
      return `application/${
        extensionToContentType[ext as ApplicationExtension]
      }`;
    }
    return `application/${ext}`;
  }
  return `text/${ext}`;
};

export const getFileExtension = (filename: string) => {
  const splitFilename = filename.split('.');
  return splitFilename[splitFilename.length - 1] as Extension;
};
