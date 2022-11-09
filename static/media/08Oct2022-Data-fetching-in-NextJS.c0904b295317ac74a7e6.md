
In Next.js we can render data in many ways like  or `static generation` and others.
Over here I will be discussing the difference between `getServerSideProps`, `getStaticPath` and `getStaticProps`.

### getServerSideProps
- server side rendering
- fetch data on each request
- fetch data on every request made i.e. on every page reload, before rendering the component
- not to use when the u dont wan to call the backend on every request or page  reload

### getStaticProps
- static generation
- fetch data at buld time
- render data once and made it static
- but this is going to work everytime in developement mode
- not going to run once rendered
- to render new data every few seconds use  `revalidate:` inside return 

### getStaticPath
- static generation
- which dynamic route pre load and prefetch data for

<Note>
- this are onlu for Next.js 9.3+ 
</Note>

 