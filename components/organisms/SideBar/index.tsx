import SideBarItem from './SideBarItem';

export default function SideBar() {
  return (
    <section className="sidebar">
      <div className="content">
        <h4 className="text-center text-white mt-20">Qawafel</h4>
        <div className="menus mt-30">
          <SideBarItem title="Home" href="/" />
          <SideBarItem title="productChart" href="/product-chart" />
          <SideBarItem title="OrderChart" href="/order-chart" />
        </div>
      </div>
    </section>
  );
}
