# Next Auth

## Question

Why obtain the email from the client session via a hidden input field (UserProfileForm.tsx) and pass it to our server action (_actions.ts)?

Couldn't we just get the email from the server session (via getServerSession) in the _actions.ts file?

https://next-auth.js.org/configuration/nextjs#getserversession

## todos

1. add types to:

- /signin/page.tsx
- /components/Button.tsx
- /components/GoogleSignInButton.tsx
- /components/TextField.tsx

2. set up env variables