// *)
// import('./bootstrap')
// .catch(err => console.error(err));

// ***) Load remote entry up front to avoid dynamic lazy loading
import {loadRemoteEntry } from "@angular-architects/module-federation";

loadRemoteEntry('http://localhost:3000/remoteEntry.js', 'mfe1')
.catch(err => console.error(err))
.then(_ => import('./bootstrap'))
.catch(err => console.error(err));
