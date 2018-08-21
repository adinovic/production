/*
 * 	Additional function for forms.html
 *	Written by ThemePixels
 *	http://themepixels.com/
 *
 *	Copyright (c) 2012 ThemePixels (http://themepixels.com)
 *
 *	Built for Amanda Premium Responsive Admin Template
 *  http://themeforest.net/category/site-templates/admin-templates
 */

/*
jQuery(document).ready(function(){

	var db = jQuery('#dualselect').find('.ds_arrow .arrow');	//get arrows of dual select
	var sel1 = jQuery('#dualselect select:first-child');		//get first select element
	var sel2 = jQuery('#dualselect select:last-child');			//get second select element

	sel2.empty(); //empty it first from dom.

	db.click(function(){
		var t = (jQuery(this).hasClass('ds_prev'))? 0 : 1;	// 0 if arrow prev otherwise arrow next
		if(t) {
			sel1.find('option').each(function(){
				if(jQuery(this).is(':selected')) {
					jQuery(this).attr('selected',false);
					var op = sel2.find('option:first-child');
					sel2.append(jQuery(this));
				}
			});
		} else {
			sel2.find('option').each(function(){
				if(jQuery(this).is(':selected')) {
					jQuery(this).attr('selected',false);
					sel1.append(jQuery(this));
				}
			});
		}
	});

*/

	///// FORM VALIDATION /////
jQuery(document).ready(function(){
	jQuery("#form-tbh-dosen").validate({
		rules: {
			id: "required",
			"data[password]": "required",
			"data[nama]": "required",
			"data[tempat]": "required"

		},
		messages: {
			id: "Field ID Dosen wajib diisi",
			"data[password]": "Field Password wajib diisi",
			"data[nama]": "Field Nama Dosen wajib diisi",
			"data[tempat]": "Field Tempat/Tanggal Lahir wajib diisi"
		}
	});

	jQuery("#form-tbh-mhs").validate({
		rules: {
			id: "required",
			"data[password]": "required",
			"data[password2]": "required",
			"data[nama]": "required"
		},
		messages: {
			id: "Field ID Mahasiswa wajib diisi",
			"data[password]": "Field Password wajib diisi",
			"data[password2]": "Field Password Ortu/Wali wajib diisi",
			"data[nama]": "Field Nama Mahasiswa wajib diisi"
		}
	});

	jQuery("#form-tbh-fakultas").validate({
		rules: {
			id: "required",
			"data[nama]": "required",
			"data[nippimpinan]": "required",
			"data[namapimpinan]": "required",
			"data[alamat]": "required"
		},
		messages: {
			id: "Field Kode Fakultas wajib diisi",
			"data[nama]": "Field Nama Fakultas wajib diisi",
			"data[nippimpinan]": "Field NIP PimpinanNama Pimpinan wajib diisi",
			"data[namapimpinan]": "Field Nama Pimpinan wajib diisi",
			"data[alamat]": "Field Alamat Fakultas wajib diisi"
		}
	});

	jQuery("#form-tbh-departemen").validate({
		rules: {
			id: "required",
			"data[idfakultas]": "required",
			"data[nama]": "required",
			"data[nippimpinan]": "required",
			"data[namapimpinan]": "required",
			"data[alamat]": "required"
		},
		messages: {
			id: "Kode Departemen/Jurusan wajib diisi",
			"data[idfakultas]": "Field Fakultas belum dipilih",
			"data[nama]": "Field Nama Departemen/Jurusan wajib diisi",
			"data[nippimpinan]": "Field NIP Ketua Departemen/Jurusan wajib diisi",
			"data[namapimpinan]": "Field Nama Ketua wajib diisi",
			"data[alamat]": "Field Alamat Departemen/Jurusan wajib diisi"
		}
	});

	jQuery("#form-tbh-prodi").validate({
		rules: {
			nama: "required",
			idj: "required"
		},
		messages: {
			nama: "Field Nama Prodi wajib diisi",
			idj: "Field Jenjang Program Studi belum dipilih"
		}
	});

	jQuery("#form-tbh-konsentrasi").validate({
		rules: {
			id: "required",
			"data[nama]": "required"
		},
		messages: {
			id: "Field Kode Konsentrasi wajib diisi",
			"data[nama]": "Field Nama Konsentrasi wajib diisi"
		}
	});

	jQuery("#form-tbh-kampus").validate({
		rules: {
			id: "required",
			"data[nama]": "required"
		},
		messages: {
			id: "Field ID Asisten Lab wajib diisi",
			"data[nama]": "Field Nama wajib diisi"
		}
	});

	jQuery("#form-tbh-astlab").validate({
		rules: {
			id: "required",
			nip: "required",
			"data[nama]": "required",
			"data[tempat]": "required"
		},
		messages: {
			id: "Field Kode Kampus wajib diisi",
			nip: "Field NIP wajib diisi",
			"data[nama]": "Field Nama wajib diisi",
			"data[tempat]": "Field Tempat Lahir wajib diisi"
		}
	});

	jQuery("#form-tbh-mk").validate({
		rules: {
			id: "required",
			"data[nama]": "required",
			namamakul2: "required",
			sksmk: "required"
		},
		messages: {
			id: "Field Kode Mata Kuliah wajib diisi",
			"data[nama]": "Field Nama Mata Kuliah wajib diisi",
			namamakul2: "Field Nama Mata Kuliah di Kurikulum wajib diisi",
			sksmk: "Field SKS wajib diisi"
		}
	});

	jQuery("#form-tbh-dsnpgjr").validate({
		rules: {
			iddosen: "required"
		},
		messages: {
			iddosen: "Field ID Dosen Pengajar wajib diisi"
		}
	});

	jQuery("#form-tbh-dsnpgjrmk").validate({
		rules: {
			idmakul: "required"
		},
		messages: {
			idmakul: "Field Kode Mata Kuliah wajib diisi"
		}
	});

	jQuery("#form-tbh-mkmhs").validate({
		rules: {
			idmahasiswa: "required"
		},
		messages: {
			idmahasiswa: "Field NIM wajib diisi"
		}
	});

	jQuery("#form-tbh-jdlkul").validate({
		rules: {
			makul: "required",
			"data[mulai]": "required",
			"data[selesai]": "required"
		},
		messages: {
			makul: "Field Kode Mata Kuliah wajib diisi",
			"data[mulai]": "Field Jam Mulai wajib diisi",
			"data[selesai]": "Field Jam Selesai wajib diisi"
		}
	});

	jQuery("#form-tbh-ruangan").validate({
		rules: {
			id: "required",
			"data[nama]": "required",
			"data[kapasitas]": "required",
			"data[kapasitasujian]": "required"

		},
		messages: {
			id: "Field Kode Ruangan wajib diisi",
			"data[nama]": "Field Nama Ruangan wajib diisi",
			"data[kapasitas]": "Field Kapasitas Ruangan wajib diisi",
			"data[kapasitasujian]": "Field Kapasitas Ruangan wajib diisi"
		}
	});
});


// 	///// TAG INPUT /////

	// jQuery('#tags').tagsInput();


	///// SPINNER /////

	// jQuery("#spinner").spinner({min: 0, max: 100, increment: 2});


	///// CHARACTER COUNTER /////

	// jQuery("#textarea2").charCount({
	// 	allowed: 120,
	// 	warning: 20,
	// 	counterText: 'Characters left: '
	// });
