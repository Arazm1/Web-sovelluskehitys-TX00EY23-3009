Authorization Rules:

1. Cats:
- GET /cat -> public
- POST /cats -> any logged-in user
- PUT /cats/:id -> owner or admin
- DELETE /cats/:id -> owner or admin
   
   

2. Users:
- GET /user -> admin
- GET /user/:id -> admin
- POST /user/:id -> admin
- PUT /user/:id -> admin + owner
- DELETE /user/:id -> admin
   

3. Roles:
- Regular user -> can only modify their own data
- Admin -> can modify any data
