```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();
  const handleClick = () => {
    // Redirect to the home page with a query parameter using router.replace
    router.replace({ pathname: '/', query: { name: 'John Doe' } });
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go to Home with Query Parameter</button>
    </div>
  );
}
```
```javascript
// pages/index.js
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      {router.query.name && <p>Hello, {router.query.name}!</p>}
    </div>
  );
}
```