const CACHE_NAME = "plataforma-pwa-v38-dos-curvas-20260815";

const APP_SHELL = [
    "./",
    "./index.html",
    "./style.css",
    "./app.js",
    "./preguntas.js",
    "./manifest.webmanifest",
    "./plataforma-icon.svg",
    "./mascota-perrito.png"
];

self.addEventListener("install", function(event){
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache){
                return cache.addAll(APP_SHELL);
            })
            .then(function(){
                return self.skipWaiting();
            })
    );
});

self.addEventListener("activate", function(event){
    event.waitUntil(
        caches.keys()
            .then(function(keys){
                return Promise.all(
                    keys
                        .filter(function(key){
                            return key.startsWith("plataforma-pwa-") && key!==CACHE_NAME;
                        })
                        .map(function(key){
                            return caches.delete(key);
                        })
                );
            })
            .then(function(){
                return self.clients.claim();
            })
    );
});

self.addEventListener("fetch", function(event){
    const request=event.request;

    if(request.method!=="GET"){
        return;
    }

    const url=new URL(request.url);

    if(url.origin!==self.location.origin){
        return;
    }

    event.respondWith(
        fetch(request)
            .then(function(response){
                if(response && response.status===200){
                    const copia=response.clone();

                    caches.open(CACHE_NAME).then(function(cache){
                        cache.put(request,copia);
                    });
                }

                return response;
            })
            .catch(function(){
                return caches.match(request,{ignoreSearch:true})
                    .then(function(responseGuardada){
                        if(responseGuardada){
                            return responseGuardada;
                        }

                        if(request.mode==="navigate"){
                            return caches.match("./index.html");
                        }

                        return Response.error();
                    });
            })
    );
});
