import CryptoJS from "crypto-js";

export function generateWalletAddress(input: string) {
  const hash = CryptoJS.SHA256(input).toString(CryptoJS.enc.Hex);
  const walletAddress = `0x${hash.slice(0, 40)}`;

  return walletAddress;
}
