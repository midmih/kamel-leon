var inscriptionContinueHTML ='<!-- End Header -->'+
	'<div class="container page_inscription_next" data-ng-init=\'init()\' document-methodes="" body-classes="" class="doc-General">'+
		'<div >'+
			'<div  id="loginbox"  class="mainbox animated fadeInDown">'+
			'<h2><span>{{stepsTitle}} </span><br><span class="blue-subtitle">{{stepsSubTitle}}</span></h2>'+
				'<div class="steps_progress" data-step="{{steps}}">'+
					'<ul>'+
					'<li>inscription</li>'+
					'<li>Compte DropBox</li>'+
					'<li>Ajouter aux favoris</li>'+
					'<li>Configurer profils</li>'+
				'</ul>'+
					'<div class="steps_bar">'+
						'<div class="progress_item">'+
						'&nbsp;'+
					'</div>'+
						'<div class="steps_mask">'+
						'<img src="/styles/images/steps_progressmask.png" alt=""/>'+
					'</div>'+
				'</div>'+
			'</div>'+
				'<div data-ng-show=\'inscriptionStep2\' class=\'animated fadeInRight\'>'+
					'<div>'+
						'<div class="box">'+
							'<div>'+
								'<div class="centering">'+
								'<img src="/styles/images/dropbox.png" alt="Dropbox" />'+
							'</div>'+
								'<div class="info_txt" data-ng-show=\'showStep2part1\'>'+
								'<p>'+
								'L\’application CnedAdapt stocke vos documents structurés dans votre compte Dropbox. Pour cela l’application CnedAdapt va également créer un dossier dans votre DropBox afin d’y stocker automatiquement vos documents structurés. Vous devez donc disposer d\'un compte sur DropBox et autoriser l\'application CnedAdapt à y accéder. Si vous ne disposez pas d\'un compte Dropbox, vous allez être redirigé pour le créer en premier lieu. Lorsque DropBox vous demandera d\'autoriser l\'application CnedAdapt, vous devrez cliquer sur "accepter"/"autoriser".'+
								'</p>'+
									'<div class="more">'+
									'<a href="/auth/dropbox" class="btn_simple light_blue pull-right" title="Suivant" name="suivant_four">Suivant</a>'+
								'</div>'+
							'</div>'+
								'<div class="info_txt"  data-ng-show=\'showStep2part2\'>'+
								'<p>Votre compte sur l’application CnedAdapt est maintenant associé à votre compte DropBox</p>'+
									'<div class="more">'+
									'<div data-ng-show=\'!toStep3Button\' class="much_padding pull-right" style="margin-right: 30px"><img src="/styles/images/loaderWaite.gif"></div>'+
									'<button data-ng-show=\'toStep3Button\' data-ng-click=\'toStep3()\' class="btn_simple light_blue pull-right animated fadeInRight" title="Suivant" name="suivant_five">Suivant</button>'+
								'</div>'+
							'</div>'+
						'</div>'+
					'</div>'+
				'</div>'+
			'</div>'+
				'<div data-ng-show=\'inscriptionStep3\' class=\'animated fadeInRight\'>'+
					'<div class="box">'+
						'<div>'+
							'<div class="centering">'+
							'<img src="/styles/images/dropbox.png" alt="Dropbox" />'+
						'</div>'+
							'<div class="info_txt">'+
							'<p class="text_left">'+
							'Glissez le bouton CnedAdapt sur la barre de favoris de votre navigateur (située en haut de l’écran) afin de faciliter …lancer automatiquement l’affichage adapté de vos documents'+
							'</p>'+
							'<div class="drag_btn">'+
								'<div class="bookmarklet_contaioner">'+
									'<p class="bookmarklet_btn">'+
										'<a href="javascript:(function(){window.location.href={{userDropBoxLink}}})();" class=\'grey_btn normal_padding\' title="CnedAdapt">CnedAdapt</a>'+
									'</p>'+
									'<p class="">'+
										'<img src="/styles/images/bookmarklet_howto.png" alt="CnedAdapt" />'+
									'</p>'+
								'</div>'+
							'</div>'+
						'</div>'+
							'<div class="more">'+
							'<button data-ng-click="toStep4()" class="btn_simple light_blue pull-right" title="Suivant" name="suivant_six">Suivant</button>'+
						'</div>'+
					'</div>'+
				'</div>'+
			'</div>'+
				'<div data-ng-show=\'inscriptionStep4\' class=\'animated fadeInRight\' style=\'margin-top: 20px\'>'+
					'<div>'+
						'<div class="info_txt">'+
						'<p class="text_left much-btmargin">'+
						'Vous devez configurer un ou plusieurs profils d\'adaptation des documents, dans l\'étape suivante vous allez accéder à l\'écran qui vous permet de le faire.'+
						'</p>'+
							'<div class="more">'+
							'<a href=\'{{profileDropbox}}\' class="btn_simple light_blue pull-right" title="Suivant"  name="suivant_seven">Suivant</a>'+
						'</div>'+
					'</div>'+
				'</div>'+
			'</div>'+
		'</div>'+
	'</div>'+
'</div>'+
	'<div class="modal fade in" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
		'<div class="modal-dialog bigger">'+
			'<div class="modal-content">'+
				'<div class="modal-header">'+
				'<h3 class="modal-title light_bluehead" id="myModalLabel">Informations</h3>'+
			'</div>'+
				'<div class="modal-body adjust-modal-body">'+
				'<p class="modal_content-text">'+
				'Votre compte CnedAdapt a bien été créé. Vous pouvez désormais l\'utiliser pour accéder à l\'application CnedAdapt. Cependant vous ne pourrez le faire qu’après avoir associé ce compte à votre compte DropBox. Nous vous proposons d’en créer un si nécessaire dans l’étape suivante.'+
				'</p>'+
			'</div>'+
				'<div class="centering">'+
				'<button type="button" class="btn_simple light_blue" data-dismiss="modal" title="OK" name="ok_btn" id="ok_btn">OK</button>'+
			'</div>'+
		'</div>'+
	'</div>'+
'</div>'+
	'<div class="row marketing">'+
'</div>';