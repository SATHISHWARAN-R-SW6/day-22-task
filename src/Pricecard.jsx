const PriceCard = ({
  plan,
  price,
  users,
  storage,
  publicProjects,
  privateProjects,
  phoneSupport,
  subdomain,
  statusReports,
}) => {
  return (
    <div className="price-card">
      <h2>{plan}</h2>
      <h3>${price}/month</h3>
      <ul>
        <li>{users} User(s)</li>
        <li>{storage}GB Storage</li>
        <li>Unlimited Public Projects</li>
        <li>Community Access</li>
        {privateProjects && <li>Unlimited Private Projects</li>}
        {phoneSupport && <li>Dedicated Phone Support</li>}
        {subdomain && <li>Free Subdomain</li>}
        {statusReports && <li>Monthly Status Reports</li>}
      </ul>
      <button>BUTTON</button>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <PriceCard
        plan="FREE"
        price={0}
        users={1}
        storage={50}
        publicProjects={true}
        phoneSupport={true}
        subdomain={true}
      />
      <PriceCard
        plan="PLUS"
        price={9}
        users={5}
        storage={50}
        publicProjects={true}
        privateProjects={true}
        phoneSupport={true}
        subdomain={true}
        statusReports={true}
      />
      <PriceCard
        plan="PRO"
        price={49}
        users="Unlimited"
        storage={50}
        publicProjects={true}
        privateProjects={true}
        phoneSupport={true}
        subdomain={true}
        statusReports={true}
      />
    </div>
  );
};

export default App;
