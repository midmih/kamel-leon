var imagesHTML = '<div id=\'imagePage\'  document-methodes="">'+
	'<div class="row marketing workspace_wrapper" id=\'imagePageHidden\' style=\'display: none\' data-ng-init=\'initImage()\'>'+
		'<!--		<div class="upload-file">'+
				'<form class="form-inline" role="form">'+
						'<div ng-show=\'pdfinfo\' class="alert alert-info animated fadeInDown" style=\'margin-top: 10px;width: 300px;height: 50px;\'>'+
								'<div style=\'margin-top: -10px\'>'+
										'<h5><span class="glyphicon glyphicon-info-sign"></span> Vous pouvez ajouter un autre lien</h5>'+
								'</div>'+
						'</div>'+
						'<div ng-show=\'pdferrLien\' class="alert alert-danger animated fadeInDown" style=\'margin-top: 10px;width: 50%;height: 50px;\'>'+
								'<div style=\'margin-top: -10px\'>'+
										'<h5><span class="glyphicon glyphicon-warning-sign"></span>{{messageErreur}}</h5>'+
								'</div>'+
						'</div>'+
						'<label for="fileToUpload">Ajouter un document</label><br />'+
						'<div class="form-group">'+
								'<input ng-model="pdflinkTaped"  class="form-control" placeholder="Lien de votre fichier PDF" style=\'width: 300px\'>'+
						'</div>'+
						'<button ng-click=\'loadPdfLink()\' class="btn btn-primary"  style=\'width: 170PX\' translate>Telecharger</button>'+
						'<br>'+
						'<div class="form-group" style=\'margin-top: 10px\'>'+
								'<input type="file" ng-model-instant id="fileToUpload" multiple onchange="angular.element(this).scope().setFiles(this)" class=\'btn btn-default\' style=\'width: 300px;\' />'+
							'</div>'+
							'<button ng-click="uploadFile()" class=\'btn btn btn-primary\' id=\'add-img\' style=\'width: 170PX\'>Charger un fichier local</button>'+
				'</form>'+
		'</div>-->'+
		'<!-- <div class="bar-btns">'+
				'<ul>'+
						'<li>'+
								'<button ng-disabled=\'permitSaveblocks()\' data-toggle="modal" data-target="#actions-workspace">Actions</button>'+
						'</li>'+
						'<li>'+
								'<button ng-click=\'sendCrop(currentImage.source)\'>Découper</button>'+
						'</li>'+
						'<li>'+
								'<a href="#ocr-block" showtab="" class="active">Texte</a>'+
								'<ul id="ocr-block" class="sub-menus">'+
										'<li>'+
												'<button ng-click="modifierTexte()" >Editer</button>'+
										'</li>'+
										'<li class="type-text">'+
												'<label>Choisir type de texte : </label>'+
												'<select class="form-control input-sm" ng-init="tagSelected = listTags[0]" ng-model="tagSelected" ng-change="updateBlockType()">'+
														'<option ng-repeat="tag in listTags" value="{{tag._id}}" >{{tag.libelle}}</option>'+
												'</select>'+
										'</li>'+		
								'</ul>'+
						'</li>'+
						'<li>'+
								'<a href="#synthese-block" showtab="">Synthèse vocale</a>'+
								'<ul id="synthese-block" class="sub-menus">'+
										'<li>'+
												'<button ng-click="textToSpeech()" >Générer</button>'+
										'</li>'+
										'<li>'+
												'<button ng-click="playSong()" ng-show="showPlaySong()" ><i class="fa fa-volume-up" ></i></button>'+
												'<audio id="player" src="" preload="auto"></audio>'+
										'</li>'+
								'</ul>'+
						'</li>'+
				'</ul>'+
		'</div> -->'+
		'<div class="parent-container-images">'+
			'<div class="workspace_tools text_setting" id="text_setting">'+
				'<button ng-click="modifierTexte()"  type="button" class="set_txtbtn btn_simple light_blue pull-left with_icnleft" title="{{\'Editer le texte\' | translate}}" >editer le texte</button>'+
				'<button ng-show="(currentImage.source===undefined)" ng-click="duplicateBlock2()" type="button" class="duplicate_txtbtn btn_simple light_blue pull-left with_icnleft" title="{{\'Dupliquer le bloc\' | translate}}">Dupliquer le bloc</button>'+
				'<button ng-click="remove2()"  type="button" class="delete_txtbtn btn_simple light_blue pull-left with_icnleft" title="{{\'Supprimer le bloc\' | translate}}">Supprimer le bloc</button>'+
			'</div>'+
			'<div class="workspace_tools audio_synth" id="audio_synth">'+
				'<p class="controls_zone pull-left">'+
				'<label for="type_text" class="">Type de texte</label>'+
				'<select sselect class="" id="select-tag" ng-init="tagSelected = listTags[0]" ng-model="tagSelected" ng-change="updateBlockType()">'+
					'<option ng-repeat="tag in listTags" value="{{tag._id}}">{{tag.libelle}}</option>'+
				'</select>'+
				'</p>'+
				'<ul class="audio_player-zone pull-left audio_reader" ng-show="showSynthese">'+
					'<li>'+
						'<label>Synthèse vocale'+
						'</label>'+
					'</li>'+
					'<li>'+
						'<button ng-click="textToSpeech()" type="button" class="btn_simple light_blue generate_vocale">génerer</button>'+
					'</li>'+
					'<li>'+
						'<button type="button" class="btn_simple light_blue play_vocale" ng-click="playSong()">&nbsp;</button>'+
						'<audio id="player" src="" preload="auto"></audio>'+
					'</li>'+
				'</ul>'+
				'<button type="button" class="btn_simple light_blue pull-right" ng-click="textToSpeech()" ng-show="!showSynthese" title="{{\'synthese vocale\' | translate}}" >synthèse vocale</button>'+
			'</div>'+
			'<!-- <div class="workspace_tools audio_reader" id="audio_reader">'+
					'<p class="controls_zone pull-left">'+
				'<label for="type_text" class="">Type de texte</label>'+
				'<select sselect class="" ng-init="tagSelected = listTags[0]" ng-model="tagSelected" ng-change="updateBlockType()">'+
					'<option ng-repeat="tag in listTags" value="{{tag._id}}">{{tag.libelle}}</option>'+
				'</select>'+
				'</p>'+
				'<ul class="audio_player-zone pull-left">'+
					'<li>'+
						'<label>Synthèse vocale</label>'+
					'</li>'+
					'<li>'+
						'<button ng-click="textToSpeech()" type="button" class="btn_simple light_blue generate_vocale">génerer</button>'+
					'</li>'+
					'<li>'+
						'<button type="button" class="btn_simple light_blue play_vocale" ng-click="playSong()">&nbsp;</button>'+
						'<audio id="player" src="" preload="auto"></audio>'+
					'</li>'+
				'</ul>'+
			'</div> -->'+
			'<div class="images-container">'+
				'<span ng-show="currentImage.text && !showEditor">'+
					'<div dynamic="currentImage.text"></div>'+
				'</span>'+
				'<div ng-show="showEditor" class="text-oceriser">'+
					'<textarea ck-editor ng-model="textes.text" id="editorOcr" data-barre="OcrVersion" ng-change ="initCkEditorChange()"></textarea>'+
				'</div>'+
				'<span ng-show="currentImage.source || currentImage.original">'+
					'<div class="zones" ng-repeat="zone in zones">'+
						'<div style="width:{{zone.w}}px;height:{{zone.h}}px;top:{{zone.y}}px;left:{{zone.x}}px;">'+
							'<button ng-click="removeZone(zone._id)"  class="label label-default">'+
							'<span class="glyphicon glyphicon-remove-circle"></span>'+
							'</button>'+
						'</div>'+
					'</div>'+
					'<img-cropped src=\'{{currentImage.source}}\' selected=\'selected(cords)\' class="img-crop" style=\'background-color: white;width: 50%;\'/>'+
				'</span>'+
			'</div>'+
		'</div>'+
		'<div class="tree-images" style="float:left;">'+
			'<!-- <h3>Structure Document</h3> -->'+
			'<!-- 		<div class="cropped_images" ng-repeat="image in blocks"> -->'+
			'<!-- 			<div class="element level-{{image.level}}"> -->'+
			'<!-- 				<div class="controles"> -->'+
			'<!-- 					<button ng-click="oceriser(image.source)" >T</button> -->'+
			'<!-- 				</div> -->'+
			'<!-- 				<img ng-src="{{image.source}}" ng-click="workspace(image)" style="max-width:200px;height:auto;">	 -->'+
			'<!-- 			</div> -->'+
			'<!-- 		</div> -->'+
				'<ol ui-nested-sortable="{'+
				'listType: \'ol\','+
				'items: \'li\','+
				'doNotClear: true,'+
				'placeholder: \'ui-state-highlight\','+
				'forcePlaceholderSize: true,'+
				'toleranceElement: \'> div\''+
				'}" ui-nested-sortable-stop="updateDragDrop($event, $ui)">'+
				'<li ez-tree="child in blocks.children at ol" ng-class="{minimized:child.minimized}" >'+
					'<div class="layer_container" ng-click="setActive($event)" >'+
						'<span class="image_container">'+
							'<button class="toggle" ng-click="toggleMinimized(child)" ng-switch on="child.minimized">'+
								'<span ng-show="child.children.length>0" ng-switch-when="true" class="tree_closed">'+
								'<!-- <img src="/styles/images/tree_closed.png" alt="" /> -->'+
								'</span>'+
								'<span ng-show="child.children.length>0" ng-switch-default class="tree_opened">'+
								'<!-- <img src="/styles/images/tree_opened.png" alt="" /> -->'+
								'</span>'+
							'</button>'+
							'<button class="delete_layer" ng-click="remove(child)" title="{{\'Supprimer calque\' | translate}}" >&nbsp;</button>'
							'<img class="cut_piece"  ng-click="workspace(child, $event)" ng-show="(child.source!==undefined)" ng-src="{{child.originalSource || child.source}}" width="142px" alt=""/>'+
							'<span ng-show="(child.source===undefined)" ng-click="workspace(child,$event)" style="width:142px;height:50px;background-color:white;display: inline-block;" dynamic="child.text | showText:30:true" class="cut_piece" ></span>'+
							'<button ng-show="(child.source===undefined)" class="duplicate_layer" ng-click="duplicateBlock(child)" title="{{\'Dupliquer calque\' | translate}}" >&nbsp;</button>'+
						'</span>'+
						'<span class="options_label">'+
							'<span class="label_txt" ng-show="ocerised(child.text)" title="{{\'Type de calque\' | translate}}">&nbsp;</span>'+
							'<span class="label_vocal" ng-show="vocalised(child.synthese)" title="{{\'Dupliquer calque\' | translate}}">&nbsp;</span>'+
							'<span ng-show="getPictoTag(child)" class="label_type">'+
								'<img ng-src="{{getPictoTag(child)}}" alt="" />'+
							'</span>'+
						'</span>'+
						'<!--<div class="controles">'+
							 '<input ng-model="child.titre" size="5px" />'+
							'<div ng-show="ocerised(child.text)" class="text_ocr">'+
								'<span></span>'+
							'</div>'+
							'<div ng-show="vocalised(child.synthese)" class="vocal_syn">'+
								'<span></span>'+
							'</div>'+
						'</div>-->'+
					'</div>'+
					'<ol ng-class="{pregnant:child.children.length}"></ol>'+
				'</li>'+
			'</ol>'+
		'</div>'+
	'</div>'+
	'<div class="actions">'+
	'</div>'+
	'<div ng-show=\'showloaderProgress\' class="loader_cover">'+
    '<div id="loader_container">'+
      '<div class="loader_bar">'+
        '<div class="progress_bar" style="width:{{loaderProgress}}%;">&nbsp;'+
        '</div>'+
      '</div>'+
      '<p class="loader_txt">{{loaderMessage}} <img src="{{loaderImg}}" alt="loader" /></p>'+
    '</div>'+
'</div>'+
'</div>'+
'<!-- debut modal Add -->'+
'<div class="modal fade" id="actions-workspace" tabindex="-1" role="dialog" aria-labelledby="tagAddLabel" aria-hidden="true">'+
	'<div class="modal-dialog">'+
		'<div class="modal-content">'+
			'<div class="modal-header">'+
				'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'+
				'<h4 ng-show="!editBlocks" class="modal-title">Enregistrer document</h4>'+
				'<h4 ng-show="editBlocks" class="modal-title">Modifier document</h4>'+
			'</div>'+
			'<div ng-show="errorMsg" class="msg_error">{{msgErrorModal}}</div>'+
			'<div class="modal-body adjust-modal-body">'+
				'<form id="show_document" name="show_document" class="" role="form" style="overflow:hidden;">'+
					'<fieldset class="padding_large">'+
						'<p class="controls_zone">'+
						'<label for="docTitre" class="simple_label"><span>Titre du document</span> <span class="required">*</span></label>'+
						'<input type="text" max-length="32" ng-disabled="editBlocks" class="" id="docTitre" placeholder="Entrez le titre du document" ng-model="docTitre" required>'+
						'</p>'+
					'</fieldset>'+
					'<div class="centering" id="ProfileButtons">'+
						'<button type="button" class="reset_btn" data-dismiss="modal" title="{{\'Annuler\' | translate}}">Annuler</button>'+
						'<button ng-show="!editBlocks" type="button" class="btn_simple light_blue" ng-disabled="!show_document.$valid" ng-click="showlocks()" data-dismiss="modal" title="{{\'Enregistrer sur ma Dropbox\' | translate}}">Enregistrer sur ma Dropbox</button>'+
						'<button ng-show="editBlocks" type="button" class="btn_simple light_blue" ng-disabled="!show_document.$valid" ng-click="saveRestBlocks()" data-dismiss="modal" title="{{\'Modifier sur ma Dropbox\' | translate}}">Modifier sur ma Dropbox</button>'+
					'</div>'+
				'</form>'+
			'</div>'+
		'</div>'+
	'</div>'+
'</div>'+
'<!-- modal enc as derreur -->'+
'<div class="modal fade in" id="myModalWorkSpace" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
	'<div class="modal-dialog bigger">'+
		'<div class="modal-content">'+
			'<div class="modal-header">'+
				'<!-- <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button> -->'+
				'<h4 class="modal-title light_bluehead" id="myModalLabel">lien non valide</h4>'+
			'</div>'+
			'<div class="modal-body adjust-modal-body">'+
				'<p class="modal_content-text">'+
				'Veuillez utiliser la Bookmarklet CnedAdapt avec l\'URL d\'un fichier PDF.'+
				'</p>'+
			'</div>'+
			'<div class="centering">'+
				'<button type="button" class="btn_simple light_blue much_padding" data-dismiss="modal">OK</button>'+
			'</div>'+
		'</div>'+
	'</div>'+
'</div>'+
'<div class="modal fade in" id="myModalWorkSpaceRedirection" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
	'<div class="modal-dialog bigger">'+
		'<div class="modal-content">'+
			'<div class="modal-header">'+
				'<!-- <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button> -->'+
				'<h4 class="modal-title light_bluehead" id="myModalWorkSpaceRe">INFORMATION</h4>'+
			'</div>'+
			'<div class="modal-body adjust-modal-body">'+
				'<p class="modal_content-text">'+
				'Pour structurer le document vous devez être authentifié. Veuillez-vous authentifier avant de poursuivre la structuration.'+
				'</p>'+
			'</div>'+
			'<div class="centering">'+
				'<button type="button" class="btn_simple light_blue much_padding" data-dismiss="modal">OK</button>'+
			'</div>'+
		'</div>'+
	'</div>'+
'</div>'+
'<div class="modal fade in" id="documentExist" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
	'<div class="modal-dialog biggest">'+
		'<div class="modal-content">'+
			'<div class="modal-header">'+
				'<!-- <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button> -->'+
				'<h4 class="modal-title light_bluehead" id="mydocumentExist">INFORMATION</h4>'+
			'</div>'+
			'<div class="modal-body adjust-modal-body">'+
				'<p class="modal_content-text">'+
				'Le document choisi a deja été structuré,voulez-vous ?'+
				'</p>'+
			'</div>'+
			'<div class="centering choiceWorkSpace">'+
				'<button type="button" ng-click=\'resumeWorking()\' class="btn_simple light_blue much_padding" data-dismiss="modal">Continuer la structuration</button>'+
				'<button type="button" ng-click=\'createNew()\' class="btn_simple light_blue much_padding" data-dismiss="modal">Structurer à nouveau</button>'+
				'<button type="button" ng-click=\'openApercu()\' class="btn_simple light_blue much_padding" data-dismiss="modal">Afficher le document</button>'+
			'</div>'+
		'</div>'+
	'</div>'+
'</div>'+
'<!-- fin modal Add -->'+
'<div class="fixed_loader" ng-show="showLoaderOcr">'+
    '<div class="loadre_container">'+
		'<p class="loader_txt">{{loaderMessage}}</p>'+
    '</div>'+
'</div>';