# Next.js Query Parameter Not Accessible After Redirect

This repository demonstrates an unexpected behavior in Next.js when redirecting to a page with query parameters using the `useRouter` hook. The redirect happens correctly, but the query parameters are not accessible on the target page.

## Bug Description
The provided code shows a redirect from the `/about` page to the `/` page with a query parameter (`name: 'John Doe'`). When you navigate to the `/` page after the redirect, the `router.query` object does not contain the expected `name` parameter.

## Reproduction Steps
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to `/about`.
5. Click the button to redirect to the home page with the query parameter.
6. Observe that the query parameter is not accessible in the home page component.

## Solution
The solution is to use `router.replace` instead of `router.push` for the redirect. This ensures that the query parameters are properly included in the URL and accessible in the target page.

## Expected Behavior
The query parameters should be properly included in the URL and accessible in the target page's `router.query` object.
