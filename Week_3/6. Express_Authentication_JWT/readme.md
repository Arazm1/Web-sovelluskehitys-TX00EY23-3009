# HTML/JS starter template

Opettajan valmis mallipohja JS-harjoituksiin (`main`-haara).

- prettier conf
- eslint conf

Lisää esimerkkikoodeja löytyy tämän repositorion muista haaroista (branch).




Authorization Rules:

1. Cats:
   - PUT /cats/:id → owner or admin
   - DELETE /cats/:id → owner or admin
   - POST /cats → any logged-in user
   - GET routes → public

2. Users:
   - PUT /users/:id → self or admin
   - DELETE /users/:id → self or admin
   - GET /users/:id → any logged-in user (optional)

3. Roles:
   - Regular user → can only modify own data
   - Admin → can modify any data
