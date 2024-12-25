import RanobeTopCard from '../../components/RanobeCard/RanobeTopCard';
import stylesMain from './MainPage.module.css';
const MainPage = () => {
  return (
    <>
      <p>rteg</p>
      <div className={stylesMain.topCard}>
        <RanobeTopCard />
        <RanobeTopCard />
        <RanobeTopCard />
        <RanobeTopCard />
        <RanobeTopCard />
        <RanobeTopCard />
        <RanobeTopCard />
        <RanobeTopCard />
      </div>
    </>
  );
};

export default MainPage;
