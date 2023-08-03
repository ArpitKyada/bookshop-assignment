import { atom } from 'recoil';

const userInformationAtom = atom({
  key: 'userInformationAtom',
  default: {
    name: 'Arpit Kyada',
    profileImage:
      'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
  },
});

export default userInformationAtom;
