export default {
    name: 'create',
    methods: {
        saveData() {
            axios.post('http://localhost:8081/mahasiswa', {
                nim: this.nim,
                nama: this.nama,
                angkatan: this.angkatan,
                alamat: this.alamat,
                jenis_kelamin: this.jenis_kelamin,
            }).then(function (response){
                console.log(response);
                // this.item = response.data
            })
        }
    },
    data: function() { return {
        nim: null,
        nama: null,
        angkatan: null,
        alamat: null,
        jenis_kelamin: null,
    }},
    template: '<div class="create"><h4>Tambah Mahasiswa</h4><form @submit="saveData()" v-on:submit.prevent="onSubmit"><div class="row justify-content-center"><div class="col-md-10"><div class="form-group row"><label class="col-md-4">NIM</label><div class="col-md-8"><input type="text" v-model="nim" name="nim" class="form-control"></div></div><div class="form-group row"><label class="col-md-4">Nama</label><div class="col-md-8"><input type="text" v-model="nama" name="nama" class="form-control"></div></div><div class="form-group row"><label class="col-md-4">Angkatan</label><div class="col-md-8"><input type="text" v-model="angkatan" name="angkatan" class="form-control"></div></div><div class="form-group row"><label class="col-md-4">Alamat</label><div class="col-md-8"><input type="text" v-model="alamat" name="alamat" class="form-control"></div></div><div class="form-group row"><label class="col-md-4">Jenis Kelamin</label><div class="col-md-8"><select v-model="jenis_kelamin" name="jenis_kelamin" class="form-control"><option value="Laki-laki">Laki-laki</option><option value="Perempuan">Perempuan</option></select></div></div><div class="form-group row"><div class="col-md-8 offset-4"><button type="submit" class="btn btn-primary btn-sm">Simpan</button><router-link to="/" class="btn btn-light brn-sm">Batal</router-link></div></div></div></div></form></div>'
}