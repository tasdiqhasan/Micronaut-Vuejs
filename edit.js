var url_string = window.location.href
var url = new URL(url_string)
var id = url.searchParams.get('id')
var endpoint = 'http://localhost:8081/mahasiswa/'+id

export default {
    name: 'edit',
    mounted: function() {
        var url_string = window.location.href
        var url = new URL(url_string)
        var id = url.searchParams.get('id')
        var endpoint = 'http://localhost:8081/mahasiswa/'+id

        axios.get(endpoint).then(response => {
            this.mahasiswa = response.data
            console.log(this.mahasiswa)
        })
    },
    methods: {
        saveData() {

            var url_string = window.location.href
            var url = new URL(url_string)
            var id = url.searchParams.get('id')
            var endpoint = 'http://localhost:8081/mahasiswa/edit/'+id

            axios.post(endpoint, {
                id: this.mahasiswa.id,
                nim: this.mahasiswa.nim,
                nama: this.mahasiswa.nama,
                angkatan: this.mahasiswa.angkatan,
                alamat: this.mahasiswa.alamat,
                jenis_kelamin: this.mahasiswa.jenis_kelamin,
            }).then(function (response){
                // console.log(response);
                // this.item = response.data
            })
        }
    },
    data: function() { return {
        mahasiswa: {
            id: '',
            nim: '',
            nama: '',
            angkatan: '',
            alamat: '',
            jenis_kelamin: ''
        }
    }},
    template: '<div class="create"><h4>Tambah Mahasiswa</h4><form @submit="saveData()" v-on:submit.prevent="saveData"><div class="row justify-content-center"><div class="col-md-10"><div class="form-group row"><label class="col-md-4">NIM</label><div class="col-md-8"><input type="text" v-model="mahasiswa.nim" name="nim" class="form-control"></div></div><div class="form-group row"><label class="col-md-4">Nama</label><div class="col-md-8"><input type="text" v-model="mahasiswa.nama" name="nama" class="form-control"></div></div><div class="form-group row"><label class="col-md-4">Angkatan</label><div class="col-md-8"><input type="text" v-model="mahasiswa.angkatan" name="angkatan" class="form-control"></div></div><div class="form-group row"><label class="col-md-4">Alamat</label><div class="col-md-8"><input type="text" v-model="mahasiswa.alamat" name="alamat" class="form-control"></div></div><div class="form-group row"><label class="col-md-4">Jenis Kelamin</label><div class="col-md-8"><select v-model="mahasiswa.jenis_kelamin" name="jenis_kelamin" class="form-control"><option value="Laki-laki">Laki-laki</option><option value="Perempuan">Perempuan</option></select></div></div><div class="form-group row"><div class="col-md-8 offset-4"><button type="submit" class="btn btn-primary btn-sm">Simpan</button><router-link :to="\'detail?id=\'+mahasiswa.id" class="btn btn-light brn-sm">Batal</router-link></div></div></div></div></form></div>'
}