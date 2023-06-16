# Next Auth with server actions and mongo db

## Question

Why obtain the email from the client session (UserProfileForm.tsx) and pass it to our server action (_actions.ts)?

Couldn't we just get the email from the server session (via getServerSession) in the _actions.ts file?

[getServerSession docs](https://next-auth.js.org/configuration/nextjs#getserversession)

## Answer

Probably better in the future, but at the moment there is a known issue:

Calling getServerSession in Server Action triggers error "Invariant: Method expects to have requestAsyncStorage, none available".

## Notes

The signin with email shows in the signin page but is not implemented yet

## Warning

Server Actions are still in alpha, only test this locally, do not deploy to production!
