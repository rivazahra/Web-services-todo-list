Web Services

Api ini dibuat dengan express js, sequelize (ORM), dan JWT authentifikasi

Authentication
Untuk mengakses titik akhir yang dilindungi, Anda perlu menyertakan token JWT pada header Otorisasi dengan awalan "Bearer".To access protected endpoints, you need to include a valid JWT token in the Authorization header with the "Bearer" prefix pada beberapa endpoint yaitu todo dan user.

Endpoints
**Register**
Endpoint: /register
Method: POST
Deskripisi: Register user dengan memasukan data name, email, password
Authentication: Tidak ada

**Login**
Endpoint: /login
Method: POST
Deskripisi: Login user denga memasukan data name, dan password.
Authentication: Tidak ada

**Get User by Token**
Endpoint: /users
Method: GET
Deskripisi: Mengambil data user berdasarkan token JWT
Authentication: Wajib ada token

**Get All Todo**
Endpoint: /todos
Method: GET
Deskripsi::Mengambil data todo berdasarkan user dari token JWT
Authentication: Wajib ada token
Get Todo by ID
Endpoint: /todos/:id
Method: GET
Deskripsi: Mengambil data todo user berdasarkan id pada todo.
Authentication: Wajib ada token

**Create Todo**
Endpoint: /todos
Method: POST
Deskripsi: Menambahkan todo dengan memasukan data title dan is_completed.
Authentication: Wajib ada token

**Update Todo**
Endpoint: /todos/:id
Method: PUT
Deskripsi: Mengubah todo berdarkan id dengan memasukan data title dan is_completed..
Authentication: Wajib ada token

**Delete Todo**
Endpoint: /todos/:id
Method: DELETE
Deskripsi: Menghapus todo berdasarkan id.
Authentication: Wajib ada token

**Delete All Todo**
Endpoint: /todos
Method: DELETE
Deskripsi: Menghapus semua todo.
Authentication: Wajib ada token

**Instalasi**
Clone repositori ini.
Instal dependensi: npm install dan sequelize-cli secara global : npm install -g sequelize-cli
Membuat database  : sequelize-cli db:create
Migrasi table  : sequelize-cli db:migrate
Jalankan aplikasi: npm run dev

Usage
Ambil token JWT dengan menggunakan endpoint /login.
Sertakan token yang diperoleh di header = Authorization,  isi value dengan token yang di dapat dari login.
Gunakan endpoint yang disediakan untuk mengelola daftar tugas  pada /todos dan /user.
