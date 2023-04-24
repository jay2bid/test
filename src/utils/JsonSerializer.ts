export default class JsonSerializer {
  public static Serialize(obj: any): string {
    return JSON.stringify(obj, function (_, value) {
      if (value && typeof value === 'object' && !Array.isArray(value)) {
        const replacement: any = {};
        for (const k in value) {
          if (Object.hasOwnProperty.call(value, k)) {
            replacement[JsonSerializer.toSnakeCase(k)] = value[k];
          }
        }
        return replacement;
      }
      return value;
    });
  }

  private static toSnakeCase(value: string): string {
    let snakeCaseString = '';
    for (let i = 0; i < value.length; i++) {
      const lowered = value[i].toLocaleLowerCase();

      if (i === 0) {
        snakeCaseString += lowered;
      } else if (value[i] === lowered) {
        snakeCaseString += value[i];
      } else {
        snakeCaseString += '_' + lowered;
      }
    }

    return snakeCaseString;
  }

  public static Deserialize<T>(text: any): T {
    return JSON.parse(text, function (_, value) {
      if (value && typeof value === 'object' && !Array.isArray(value))
        for (const k in value) {
          if (Object.hasOwnProperty.call(value, k)) {
            value[JsonSerializer.toPascalCase(k)] = value[k];
            delete value[k];
          }
        }
      return value;
    });
  }

  private static toPascalCase(input: string): string {
    let output = '';

    if (input.length === 0) {
      return output;
    }

    output += input[0].toUpperCase();

    const underscore = '_';
    for (let i = 1; i < input.length; i++) {
      const upperCase = input[i].toUpperCase();
      if (input[i - 1] + input[i] === underscore + input[i]) {
        output += upperCase;
      } else if (input[i] === underscore) {
        continue;
      } else {
        output += input[i];
      }
    }
    return output;
  }
}
