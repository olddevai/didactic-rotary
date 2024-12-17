import QRCode from 'qrcode';

export const generateQR = async (text: string): Promise<string> => {
  try {
    return await QRCode.toDataURL(text);
  } catch (error) {
    throw new Error('Failed to generate QR code');
  }
};