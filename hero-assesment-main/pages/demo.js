export default function Demo() {
  return (
    <div>
      <h1>Hero Component Demo</h1>
      <p>Your Hero component should render the CMS data below. Map over the heroSections array and display each hero with different layouts:</p>

      <div style={{ padding: '2rem', backgroundColor: '#f5f5f5', margin: '2rem 0' }}>
        {/* TODO: Delete once Hero component is implemented */}
        <h2>Instructions:</h2>
        <ul>
          <li>Implement the Hero component in <code>components/Hero/Hero.jsx</code></li>
          <li>Add styles in <code>components/Hero/Hero.module.css</code></li>
          <li>Map over the <code>heroSections</code> data to render multiple heroes</li>
          <li>Test different text lengths and grid placements from the data</li>
          <li>Ensure each hero section has proper spacing</li>
        </ul>
      </div>
    </div>
  );
}
