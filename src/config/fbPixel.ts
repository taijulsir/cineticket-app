export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL;

export const pageview = () => {
  (window as any).fbq?.('track', 'PageView');
};

export const event = (name: any, options: any = {}) => {
  (window as any).fbq?.('track', name, options);
};