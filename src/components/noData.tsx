import { FC } from 'react';

type Props = {
  message?: string;
};

const NoData: FC<Props> = ({ message = 'No Data Found' }) => {
  return <div className="py-10 text-center text-sm italic text-gray-500 font-light">{message ?? ''}</div>;
};

export default NoData;
