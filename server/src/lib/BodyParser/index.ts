type ParsedBody = {
  [key: string]: string;
};

class BodyParser {
  constructor() {}

  static async parse(body: ReadableStream<Uint8Array>): Promise<ParsedBody> {
    const reader = body.getReader();
    let data = '';
    while (true) {
      const readData = await reader.read();
      if (readData.done) {
        const keyValues = data.split('&');
        const result = keyValues.reduce((acc: ParsedBody, keyValue: string) => {
          const [key, value] = keyValue.split('=');
          return { ...acc, [key]: value };
        }, {});
        return new Promise((resolved) => resolved(result));
      }
      readData.value.forEach(
        (Uint8Data: number) => (data += String.fromCharCode(Uint8Data))
      );
    }
  }
}

export default BodyParser;
