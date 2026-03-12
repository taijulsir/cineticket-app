function FooterLogoWrapper({ children }: { children?: any }) {
  return (
    <div className="md:w-auto flex justify-center md:justify-start pb-6 md:pb-0">
      {children}
    </div>
  );
}

export default FooterLogoWrapper;
