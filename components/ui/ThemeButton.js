import { IoIosSunny, IoMdMoon } from 'react-icons/io';
import { useTheme } from '../../store/themeContext';
import IconButton from './IconButton';

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  if (theme === undefined) {
    return null;
  }

  return (
    <IconButton onClick={toggleTheme}>
      {theme ? <IoIosSunny /> : <IoMdMoon />}
    </IconButton>
  );
}
