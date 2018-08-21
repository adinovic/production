<?  
$manuploadfileumum="Untuk mengupload file ke file umum, pilih file yang hendak diupload,
 isikan keterangan mengenai file secukupnya dan klik Upload. Ukuran maksimum file yang diupload adalah
 $maxsize Mb dan masa berlaku file adalah $berlaku hari";


if ($tingkats=="A" AND $users==superadmin) {
	$manuploadfilebidang="Untuk mengupload file ke file bidang tertentu, pilih file yang hendak diupload, bidang, isikan keterangan mengenai file secukupnya dan klik Upload.";
} else {
	$manuploadfilebidang="Untuk mengupload file ke file bidang ".$bidanguser[$bidangs].", pilih file yang hendak diupload, isikan keterangan mengenai file secukupnya dan klik Upload.";
}

$manuploadfilebidang.=" Ukuran maksimum file yang diupload adalah
 $maxsize Mb dan masa berlaku file adalah $berlaku hari";
$mankonfig="Untuk mengubah data ukuran maksimum dan masa berlaku file, isikan data tersebut dalam bentuk bilangan bulat dan klik Simpan";
?>
