export default {
    name: 'home',
    mounted: function() {
        var url = 'http://localhost:8081/mahasiswa'

        axios.get(url).then(response => {
            this.mahasiswa = response.data
        })
    },
    data: function() { return {
        mahasiswa: null
    }},
    template: '<div class="home"><h4>Data Mahasiswa</h4><router-link to="/tambah" class="btn btn-primary btn-sm mt-3 mb-3">Tambah</router-link><div class="table-responsive"><table class="table table-striped table-hover"><thead><tr><th>Nim</th><th>Angkatan</th><th>Nama</th><th>Alamat</th><th></th></tr></thead><tbody v-if="mahasiswa"><tr v-for="mhs in mahasiswa"><td>{{ mhs.nim }}</td><td>{{ mhs.angkatan }}</td><td>{{ mhs.nama }}</td><td>{{ mhs.alamat }}</td><td><router-link :to="\'/detail?id=\'+mhs.id" class="btn btn-light btn-sm">Detail</router-link></td></tr></tbody><tbody v-else><tr><td colspan="5" class="text-center"><i>Belum ada data.</i></td></tr></tbody></table></div></div>'
}