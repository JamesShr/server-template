/**
 * Generates a random alphanumeric code of a given length.
 * @param length The length of the code to generate.
 * @returns A random alphanumeric string.
 */
export function randomCode(length: number): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}