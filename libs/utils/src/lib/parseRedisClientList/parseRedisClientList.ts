export function parseRedisClientList(clientList: string): {
//   id: string;
//   addr: string;
  name: string;
//   age: number;
//   idle: number;
//   flags: string;
//   cmd: string;
}[] {
  // 每行代表一個 client
  const lines = clientList.trim().split('\n');

  return lines.map((line) => {
    const parts = line.split(' ');
    const obj: Record<string, string> = {};

    for (const part of parts) {
      const [key, value] = part.split('=');
      if (key) {
        obj[key] = value ?? '';
      }
    }

    return {
    //   id: obj['id'],
    //   addr: obj['addr'],
      name: obj['name'] || '(unnamed)',
    //   age: Number(obj['age']),
    //   idle: Number(obj['idle']),
    //   flags: obj['flags'],
    //   cmd: obj['cmd'],
    };
  });
}
