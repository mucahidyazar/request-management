export const getTheme = (): 'default' | 'light' => {
  if (typeof window !== 'undefined') {
    const theme = localStorage.getItem('theme') as 'default' | 'light';

    if (theme) {
      return theme;
    }
  }

  return 'default';
};

export const setTheme = (theme: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('theme', theme);
  }
};
