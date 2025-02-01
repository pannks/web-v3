import CryptoJS from "crypto-js";
import LZString from "lz-string";

class Encryption {
    private static instance: Encryption;
    private secretKey: string;

    private constructor() {
        // Use the secret key from environment variables
        this.secretKey = process.env.NEXT_PUBLIC_CRYPTO_SECRET as string;
        if (!this.secretKey) {
            throw new Error("Secret key is not defined");
        }
    }

    public static getInstance(): Encryption {
        if (!Encryption.instance) {
            Encryption.instance = new Encryption();
        }
        return Encryption.instance;
    }

    public encrypt(data: any): string {
        // Convert data to string
        const stringData = JSON.stringify(data);

        // Encrypt the string data using AES
        const encryptedData = CryptoJS.AES.encrypt(
            stringData,
            this.secretKey
        ).toString();

        return encryptedData; // Return encrypted data without compression
    }

    public decrypt(encryptedData: string): any {
        // Decrypt the encrypted data using AES
        const bytes = CryptoJS.AES.decrypt(encryptedData, this.secretKey);
        const decryptedData = bytes.toString(CryptoJS.enc.Utf8);

        // Parse the decrypted string back to its original format
        return JSON.parse(decryptedData);
    }
}

export { Encryption };
