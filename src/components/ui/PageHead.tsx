import { Helmet } from 'react-helmet-async';

interface PageHeadProps {
  title: string;
  icon: string;
}

const PAGE_NAME_DEFAULT = 'Chat Bot Landing';

const PageHead = ({ title, icon }: PageHeadProps) => {
  return (
    <div>
      <Helmet>
        <title>
          {title} | {PAGE_NAME_DEFAULT}{' '}
        </title>
        {<link rel="icon" href={icon} />}
      </Helmet>
    </div>
  );
};

export default PageHead;
