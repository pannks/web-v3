export interface ThemeProps {
  bg: string;
  bgSoft: string;
  bgBlue: string;
  text: string;
  labelBg: string;
  labelText: string;
  btnBg: string;
  btnText: string;
}

export const lightTheme: ThemeProps = {
  bg: 'var(--light-bg)',
  text: 'var(--light-text)',
  btnBg: 'var(--light-btn-bg)',
  btnText: 'var(--light-btn-text)',
  bgSoft: "var(--light-bg-soft)",
  bgBlue: "var(--light-bg-blue)",
  labelBg: "var(--light-label-bg)",
  labelText: "var(--light-label-text)"
};

export const darkTheme: ThemeProps = {
  bg: 'var(--dark-bg)',
  text: 'var(--dark-text)',
  btnBg: 'var(--dark-btn-bg)',
  btnText: 'var(--dark-btn-text)',
  bgSoft: "var(--dark-bg-soft)",
  bgBlue: "var(--dark-bg-blue)",
  labelBg: "var(--dark-label-bg)",
  labelText: "var(--dark-label-text)"
};
