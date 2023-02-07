import {useState} from 'react';

export const useTogglePasswordVisibility = (
  openIcon: string,
  closeIcon: string,
) => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [currentIcon, setCurrentIcon] = useState(openIcon);

  const handlePasswordVisibility = () => {
    const icon = currentIcon === openIcon ? closeIcon : openIcon;
    setCurrentIcon(icon);
    setPasswordVisibility(!passwordVisibility);
  };

  return {
    passwordVisibility,
    currentIcon,
    handlePasswordVisibility,
  };
};
