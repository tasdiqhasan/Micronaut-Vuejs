export default {
    name: 'detail',
    mounted: function() {
        var url_string = window.location.href
        var url = new URL(url_string)
        var id = url.searchParams.get('id')
        var endpoint = 'http://localhost:8081/mahasiswa/'+id

        axios.get(endpoint).then(response => {
            this.mahasiswa = response.data
        })
    },
    data: function() { return {
        mahasiswa: {
            nim: '',
            nama: '',
            angkatan: '',
            alamat: '',
            jenis_kelamin: ''
        }
    }},
    template: '<div class="detail"><h4>Detail Mahasiswa</h4><div class="table-responsive mt-3"><table class="table table-striped"><tr><th>NIM</th><td>{{ mahasiswa.nim }}</td></tr><tr><th>Nama</th><td>{{ mahasiswa.nama }}</td></tr><tr><th>Angkatan</th><td>{{ mahasiswa.angkatan }}</td></tr><tr><th>Alamat</th><td>{{ mahasiswa.alamat }}</td></tr><tr><th>Jenis Kelamin</th><td>{{ mahasiswa.jenis_kelamin }}</td></tr></table><router-link to="/" class="btn btn-light btn-sm mt-3">Kembali</router-link></div></div>'
}