var profilesHTML = '<h1 id=\'titreProfile\' class=\'animated fadeInLeft\' translate>Profils</h1>'+
'<div class="container" id="global_container">'+
'<div style=\'display: none\' id=\'profilePage\' data-ng-init=\'initProfil()\' document-methodes="" body-classes="" class="doc-General">'+
  '<div class="msg_succes alert-dismissable" id="addPanel" style="display:none;">'+
    '<strong>{{successAdd | translate}}</strong>'+
  '</div>'+
  '<div class="msg_succes alert-dismissable" id="defaultProfile" style="display:none;">'+
    '<strong>{{successDefault | translate}}</strong>'+
  '</div>'+
  '<div class="msg_succes alert-dismissable" id="defaultProfileCancel" style="display:none;">'+
    '<strong>{{successDefault | translate}}</strong>'+
  '</div>'+
  '<div class="msg_succes alert-dismissable" id="editPanel" style="display:none;">'+
    '<strong>{{successMod | translate}}</strong>'+
  '</div>'+
  '<div class="msg_succes" id="okEmail" data-ng-show="envoiMailOk">'+
    'Email envoyé avec succès !'+
  '</div>'+
  '<div class="msg_succes" id="msgSuccess" data-ng-show="msgSuccess">'+
    '{{msgSuccess}}'+
  '</div>'+
  '<div class="msg_error" id="msgError" data-ng-show="msgError">'+
    '{{msgError}}'+
  '</div>'+
  '<div class="head_section">'+
    '<input type="text" class="serach_field pull-left" data-ng-model="query" id="" name="" data-ng-change="specificFilter()" placeholder="Recherche un profil ..." />'+
    '<button class="add_profile grey_btn pull-right" data-toggle="modal" data-target="#addProfileModal" data-ng-click="preAddProfil()" translate title="{{\'Ajouter un profil\' | translate}}" name="add_profile">Ajouter un profil</button>'+
  '</div>'+
  '<table class="">'+
    '<thead>'+
      '<tr>'+
        '<th class="">nom</th>'+
        '<th class="">descriptif</th>'+
        '<th class="">propriétaire</th>'+
        '<th data-ng-show="admin">par défaut</th>'+
        '<th class="action_zone">action</th>'+
      '</tr>'+
    '</thead>'+
    '<tbody>'+
      '<tr data-ng-repeat="listeProfil in tests" data-ng-show="listeProfil.showed">'+
        '<td class="profile_name" data-ng-show="isProfil(listeProfil)">'+
          '<span data-ng-show="isFavourite(listeProfil)">'+
          '<i class="fa fa-star"></i>'+
          '</span>'+
          '<span data-ng-show="isDelegated(listeProfil)">'+
          '<i class="fa fa-user"></i>'+
          '</span>{{ listeProfil.nom }}'+
        '</td>'+
        '<td class="profil_desc" data-ng-show="isProfil(listeProfil)">{{ listeProfil.descriptif }}</td>'+
        '<td class="centering" data-ng-show="isProfil(listeProfil)">{{displayOwner(listeProfil)}}</td>'+
        '<td data-ng-show="admin && isProfil(listeProfil)" class="text-center" >'+
          '<div data-ng-if="isDefault(listeProfil)">'+
            '<i class="fa fa-check"></i>'+
          '</div>'+
          '<div data-ng-if="!isDefault(listeProfil)">'+
            '<i class="fa fa-times"></i>'+
          '</div>'+
        '</td>'+
        '<td class="action_area centering" data-ng-show="isProfil(listeProfil)">'+
          '<button type="button" class="action_btn" action-profil="" data-show="{{listeProfil._id}}" data-shown="false" name="profile_action_btn">&nbsp;</button>'+
          '<ul class="action_list" data-show="{{listeProfil._id}}">'+
            '<li class="show_item">'+
              '<a href="" title="{{\'Apecru\' | translate}}" data-toggle="modal" data-ng-click="toViewProfil(listeProfil)" name="show_profile">Aperçu</a>'+
            '</li>'+
            '<li class="setting_item" data-ng-hide=\'{{listeProfil.state == "favoris" || isOwnerDelagate(listeProfil) || listeProfil.state == "default"}}\'>'+
              '<a href="" title="{{\'Modifier\' | translate}}" data-toggle="modal" data-target="#editModal"  data-ng-click="preModifierProfil(listeProfil)" name="edit_profile">Modifier</a>'+
            '</li>'+
            '<li data-ng-if="admin && isDefault(listeProfil)" class="default_profil">'+
              '<a href="" title="Retirer profil par défaut" data-ng-click="retirerParDefaut(listeProfil)">'+
                'Retirer profil par défaut'+
              '</a>'+
            '</li>'+
            '<li data-ng-if="admin && !isDefault(listeProfil)" class="default_profil">'+
              '<a href="" title="Profil par défaut" data-ng-click="mettreParDefaut(listeProfil)">'+
                'Profil par défaut'+
              '</a>'+
            '</li>'+
            '<li class="duplicating_item" data-ng-show=\'{{listeProfil.state == "favoris" || listeProfil.state == "delegated" || listeProfil.state == "default"}}\'>'+
              '<a href title="Dupliquer" data-toggle="modal" data-target="#dupliqueFavoritModal" data-ng-click="preDupliquerProfilFavorit(listeProfil)">Dupliquer</a>'+
            '</li>'+
            '<li class="delegate" data-ng-show=\'isDelegatedOption(listeProfil)\'>'+
              '<a href title="{{\'Delegate\' | translate}}" data-toggle="modal" data-target="#delegateModal" data-ng-click="preDeleguerProfil(listeProfil)">Déléguer</a>'+
            '</li>'+
            '<li class="withdraw_delegate" data-ng-show=\'isAnnuleDelagate(listeProfil)\'>'+
              '<a href title="{{\'CancelDeleguation\' | translate}}" data-toggle="modal" data-target="#annulerDelegateModal" data-ng-click="preAnnulerDeleguerProfil(listeProfil)">Annuler la délégation</a>'+
            '</li>'+
            '<li class="withdraw_delegate" data-ng-show=\'isOwnerDelagate(listeProfil)\'>'+
              '<a href title="{{\'RemoveDeleguation\' | translate}}" data-toggle="modal" data-target="#retirerDelegateModal" data-ng-click="preRetirerDeleguerProfil(listeProfil)">Retirer la délégation</a>'+
            '</li>'+
            '<li class="share_item">'+
              '<a href data-toggle="modal" data-toggle="modal" data-target="#shareModal" data-ng-click="profilApartager(listeProfil)" title="{{\'Partager\' | translate}}">Partager</a>'+
            '</li>'+
            '<li class="removing_item" data-ng-show="isDeletableIHM(listeProfil)" >'+
              '<a href data-toggle="modal" data-target="#deleteModal" data-dismiss="modal" data-ng-click="preSupprimerProfil(listeProfil)" title="{{\'Supprimer\' | translate}}" name="delete_profile">Supprimer</a>'+
            '</li>'+
            '<li class="removing_item" data-ng-show=\'listeProfil.state == "favoris"\'>'+
              '<a href data-toggle="modal" data-target="#deleteFavouriteModal" data-dismiss="modal" data-ng-click="preRemoveFavourite(listeProfil)" title="{{\'Supprimer le profil\' | translate}}" name="delete_profile">Supprimer le profil des favoris</a>'+
            '</li>'+
          '</ul>'+
        '</td>'+
        '<td data-ng-show="!isProfil(listeProfil)" colspan="5">'+
          '<p data-ng-repeat="l in listeProfil.tagsText" regle-style="l.texte" class="apercu-tags"></p>'+
        '</td>'+
      '</tr>'+
    '</tbody>'+
  '</table>'+
  '<div class="modal fade" id="addProfileModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false" >'+
    '<div class="modal-dialog adjustPadding profile_popins" id="modalContent">'+
      '<div class="modal-content">'+
        '<div class="modal-header">'+
          '<button type="button" class="close" data-ng-click="afficherProfilsClear()" data-dismiss="modal" aria-hidden="true">&times;</button>'+
          '<h3 class="modal-title" id="myModalLabel" translate>Ajouter un profil</h3>'+
        '</div>'+
        '<div data-ng-show="affichage" class="msg_error">'+
          '<ul data-ng-repeat="error in addFieldError">'+
            '<li>Le champ <strong>{{error}}</strong> est invalide</li>'+
          '</ul>'+
        '</div>'+
        '<ul data-ng-show="erreurAfficher" class="msg_error">'+
          '<li>Vous devez saisir au moins une <strong>Règle</strong> de style </li>'+
        '</ul>'+
        '<div class="modal-body adjust-modal-body">'+
          '<div class="row-fluid span6">'+
            '<div class="tab-content">'+
              '<div class="tab-pane active" id="profile" data-ng-form="AjoutformValidation" >'+
                '<form class="form-horizontal" role="form" id="addProfile" name="addProfile">'+
                  '<fieldset>'+
                    '<span class="group_title">Informations liées au profil <span>(obligatoires)</span></span>'+
                    '<p class="controls_zone pull-left">'+
                    '<label for="nom" class=""><span translate>Nom</span> <span class="required"> *</span></label>'+
                    '<input type="text" class="" id="add_nom" placeholder="Entrez le nom" data-ng-model="profil.nom" required>'+
                    '</p>'+
                    '<p class="controls_zone pull-right">'+
                    '<label  for="descriptif" class=""><span translate>Descriptif</span> <span class="required"> *</span></label>'+
                    '<input type="text" class="" id="add_descriptif" placeholder="Entrez le descriptif" data-ng-model="profil.descriptif" required />'+
                    '</p>'+
                  '</fieldset>'+
                  '<fieldset class="noblackBorder">'+
                    '<span class="group_title">Paramètres principaux du profil</span>'+
                    '<div class="regles_area">'+
                      '<div class="regles-head_area">'+
                        '<p class="controls_zone">'+
                        '<label for="tag" class=""><span translate>Regles</span> <span class="required"> *</span></label>'+
                        '<select id="add_tag" sselect class="" data-ng-model="tagList" required name="tag">'+
                          '<option data-ng-repeat="tag in listTags" value="{{tag}}" data-ng-disabled="affectDisabled(tag.disabled)">{{tag.libelle}}</option>'+
                        '</select>'+
                        '</p>'+
                        '<div data-ng-hide="hideVar" class="blocker">&nbsp;</div>'+
                      '</div>'+
                      '<div class="regles-body_area">'+
                        '<div class="pull-left">'+
                          '<p class="controls_zone">'+
                          '<label  for="police" class=""><span translate>Police </span><span class="required"> *</span></label>'+
                          '<select id="add_font" sselect class="" data-ng-model="policeList" data-ng-change="reglesStyleChange(\'police\', policeList)" required name="font">'+
                            '<option data-ng-repeat="police in policeLists" value="{{police}}">{{police}}</option>'+
                          '</select>'+
                          '</p>'+
                          '<p class="controls_zone">'+
                          '<label  for="taille" class=""><span translate>Taille </span><span class="required"> *</span></label>'+
                          '<select id="add_size" sselect class="" data-ng-model="tailleList" data-ng-change="reglesStyleChange(\'taille\', tailleList)" required name="size">'+
                            '<option data-ng-repeat="taille in tailleLists" value="{{taille.number}}">{{taille.number}}</option>'+
                          '</select>'+
                          '</p>'+
                          '<p class="controls_zone">'+
                          '<label  for="tag" class=""><span translate>Interligne </span><span class="required"> *</span></label>'+
                          '<select id="add_line_height" sselect class="" data-ng-model="interligneList" data-ng-change="reglesStyleChange(\'interligne\', interligneList)" required name="line_height">'+
                            '<option data-ng-repeat="interligne in interligneLists" value="{{interligne.number}}">{{interligne.number}}</option>'+
                          '</select>'+
                          '</p>'+
                          '<p class="controls_zone">'+
                          '<label for="couleur" class=""><span translate>Coloration </span><span class="required"> *</span></label>'+
                          '<select id="add_color" sselect class="color-select" data-ng-model="colorList" data-ng-change="reglesStyleChange(\'coloration\',colorList)" required name="color">'+
                            '<option data-ng-repeat="color in colorLists" value="{{color}}">{{color}}</option>'+
                          '</select>'+
                          '</p>'+
                          '<p class="controls_zone">'+
                          '<label  for="tag" class=""><span >Graisse </span><span class="required"> *</span></label>'+
                          '<select id="add_style" sselect class="" data-ng-model="weightList" data-ng-change="reglesStyleChange(\'style\',weightList)" required name="style">'+
                            '<option data-ng-repeat="weight in weightLists" value="{{weight}}">{{weight}}</option>'+
                          '</select>'+
                          '</p>'+
                          '<p class="controls_zone">'+
                          '<label  for="add_space" class=""><span >Espace entre les mots </span><span class="required"> *</span></label>'+
                          '<select id="add_space" sselect class="" data-ng-model="spaceSelected" data-ng-change="reglesStyleChange(\'space\', spaceSelected)" required name="space">'+
                            '<option data-ng-repeat="space in spaceLists" value="{{space.number}}">{{space.number}}</option>'+
                          '</select>'+
                          '</p>'+
                          '<p class="controls_zone">'+
                          '<label  for="add_spaceChar" class=""><span >Espace entre les caractères </span><span class="required"> *</span></label>'+
                          '<select id="add_spaceChar" sselect class="" data-ng-model="spaceCharSelected" data-ng-change="reglesStyleChange(\'spaceChar\', spaceCharSelected)" required name="space">'+
                            '<option data-ng-repeat="spaceChar in spaceCharLists" value="{{spaceChar.number}}">{{spaceChar.number}}</option>'+
                          '</select>'+
                          '</p>'+
                        '</div>'+
                        '<div class="pull-right">'+
                          '<div class="show_zone">'+
                            '<p class="text-center shown-text-add" id="style-affected-add" regle-style="displayText" data-font="{{policeList}}" data-size="{{tailleList}}" data-lineheight="{{interligneList}}" data-weight="{{weightList}}" data-coloration="{{colorList}}">'+
                            '</p>'+
                          '</div>'+
                          '<div class="regles_exists">'+
                            '<ul>'+
                              '<li data-ng-repeat="var in tagStyles">'+
                                '<span id="{{var.id_tag}}" class="label_action">{{var.label}} <span translate>style avec succes</span></span>'+
                                '<a class="set_tag" href="" title="Editer le style" data-ng-click="editStyleTag(var)" name="set_tag">&nbsp;</a>'+
                                '<a class="delete_tag" href="" title="{{\'DeleteTag\' | translate}}" data-ng-click="ajoutSupprimerTag(var)">&nbsp;</a>'+
                              '</li>'+
                            '</ul>'+
                          '</div>'+
                        '</div>'+
                      '</div>'+
                      '<p class="validation_regles">'+
                      '<button type="button" id="addProfileValidation" class="btn_simple light_blue" data-ng-click="beforeValidationAdd()" translate title="{{\'validerLaRegle\' | translate}}" >validerLaRegle</button>'+
                      '</p>'+
                    '</div>'+
                  '</fieldset>'+
                  '<div class="centering" id="ProfileButtons">'+
                    '<button type="button" class="reset_btn" data-ng-click="afficherProfilsClear()" data-dismiss="modal" translate title="{{\'Annuler\' | translate}}" name="reset">Annuler</button>'+
                    '<button type="button" class="btn_simple light_blue addProfile" data-ng-click="ajouterProfil()" translate title="{{\'enregistrerCeProfil\' | translate}}" name="save_profile">enregistrerCeProfil</button>'+
                  '</div>'+
                '</form>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>'+
        '<!-- /.modal-content -->'+
      '</div>'+
      '<!-- /.modal-dialog -->'+
      '</div><!-- /.modal -->'+
    '</div>'+
    '<!-- /.modal -->'+
    '<!-- Edit modal declaration !-->'+
    '<div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false"  >'+
      '<div class="modal-dialog adjustPadding profile_popins" id="edit-Modal" >'+
        '<div class="modal-content" >'+
          '<div class="modal-header">'+
            '<button type="button" class="close" data-ng-click="afficherProfilsClear()" data-dismiss="modal" aria-hidden="true">&times;</button>'+
            '<h3 class="modal-title" id="myModalLabel" translate>Modifier le profil</h3>'+
          '</div>'+
          '<div data-ng-show="affichage" class="msg_error">'+
            '<ul data-ng-repeat="error in addFieldError">'+
              '<li>Le champ <strong>{{error}}</strong> est invalide</li>'+
            '</ul>'+
          '</div>'+
          '<ul data-ng-show="erreurAfficher" class="msg_error">'+
            '<li>Vous devez saisir au moins une <strong>Règle</strong> de style </li>'+
          '</ul>'+
          '<div class="modal-body adjust-modal-body">'+
            '<div class="row-fluid span6" data-ng-form="editionFormValidation">'+
              '<form class="form-horizontal" role="form" id="editProfile" name="editProfile" novalidate>'+
                '<fieldset>'+
                  '<span class="group_title">Informations liées au profil <span>(obligatoires)</span></span>'+
                  '<p class="controls_zone pull-left">'+
                  '<label for="nom" class=""><span translate>Nom</span> <span class="required"> *</span></label>'+
                  '<input type="text" class="" data-ng-model="profMod.nom" value="profMod.nom" required id="nom_modif" name="nom_modif">'+
                  '</p>'+
                  '<p class="controls_zone pull-right">'+
                  '<label for="descriptif" class=""><span translate>Descriptif</span> <span class="required"> *</span></label>'+
                  '<input type="text" class="" data-ng-model="profMod.descriptif" value="profMod.descriptif" placeholder="Entrez le descriptif" required id="desc_modif" name="desc_modif">'+
                  '</p>'+
                '</fieldset>'+
                '<fieldset class="noblackBorder">'+
                  '<span class="group_title">Paramètres principaux du profil</span>'+
                  '<div class="regles_area">'+
                    '<div class="regles-head_area">'+
                      '<p class="controls_zone">'+
                      '<label for="tag" class=""><span translate>Regles</span> <span class="required"> *</span></label>'+
                      '<select sselect id="selectId" class="" data-ng-model="editTag" required name="tag_modif">'+
                        '<option data-ng-repeat="tag in listTags" value="{{tag}}" data-ng-disabled="affectDisabled(tag.disabled)">{{tag.libelle}}</option>'+
                      '</select>'+
                      '</p>'+
                      '<div data-ng-hide="hideVar" class="blocker">&nbsp;</div>'+
                    '</div>'+
                    '<div class="regles-body_area">'+
                      '<div class="pull-left">'+
                        '<p class="controls_zone">'+
                        '<label  for="police" class="" ><span translate>Police </span><span class="required"> *</span></label>'+
                        '<select sselect class="" data-ng-model="policeList" data-ng-change="editStyleChange(\'police\', policeList)" required name="font_modif">'+
                          '<option data-ng-repeat="police in policeLists" value="{{police}}" > {{police}}</option>'+
                        '</select>'+
                        '</p>'+
                        '<p class="controls_zone">'+
                        '<label  for="taille" class="" ><span translate>Taille </span><span class="required"> *</span></label>'+
                        '<select sselect class="" data-ng-model="tailleList" data-ng-change="editStyleChange(\'taille\', tailleList)" required name="size_modif">'+
                          '<option data-ng-repeat="taille in tailleLists" value="{{taille.number}}">{{taille.number}}</option>'+
                        '</select>'+
                        '</p>'+
                        '<p class="controls_zone">'+
                        '<label  for="tag" class=""><span translate>Interligne </span><span class="required"> *</span></label>'+
                        '<select sselect class="" data-ng-model="interligneList" data-ng-change="editStyleChange(\'interligne\', interligneList)" required name="lineHeight_modif">'+
                          '<option data-ng-repeat="interligne in interligneLists" value="{{interligne.number}}">{{interligne.number}}</option>'+
                        '</select>'+
                        '</p>'+
                        '<p class="controls_zone">'+
                        '<label for="coloration" class=""><span translate>Coloration </span><span class="required"> *</span> </label>'+
                        '<select sselect class="color-select" data-ng-model="colorList" data-ng-change="editStyleChange(\'coloration\',colorList)" required name="color_modif">'+
                          '<option data-ng-repeat="color in colorLists" value="{{color}}">{{color}}</option>'+
                        '</select>'+
                        '</p>'+
                        '<p class="controls_zone">'+
                        '<label for="tag" class=""><span >Graisse </span><span class="required"> *</span></label>'+
                        '<select sselect class="" data-ng-model="weightList" data-ng-change="editStyleChange(\'style\',weightList)" required name="style_modif">'+
                          '<option data-ng-repeat="weight in weightLists" value="{{weight}}">{{weight}}</option>'+
                        '</select>'+
                        '</p>'+
                        '<p class="controls_zone">'+
                        '<label  for="add_space" class=""><span >Espace entre les mots </span><span class="required"> *</span></label>'+
                        '<select id="add_space" sselect class="" data-ng-model="spaceSelected" data-ng-change="editStyleChange(\'space\', spaceSelected)" required name="space">'+
                          '<option data-ng-repeat="space in spaceLists" value="{{space.number}}">{{space.number}}</option>'+
                        '</select>'+
                        '</p>'+
                        '<p class="controls_zone">'+
                        '<label  for="add_spaceChar" class=""><span >Espace entre les caractères </span><span class="required"> *</span></label>'+
                        '<select id="add_spaceChar" sselect class="" data-ng-model="spaceCharSelected" data-ng-change="editStyleChange(\'spaceChar\', spaceCharSelected)" required name="space">'+
                          '<option data-ng-repeat="spaceChar in spaceCharLists" value="{{spaceChar.number}}">{{spaceChar.number}}</option>'+
                        '</select>'+
                        '</p>'+
                      '</div>'+
                      '<div class="pull-right">'+
                        '<div class="show_zone">'+
                          '<p class="text-center shown-text-edit" id="style-affected-edit" data-font="{{policeList}}" data-size="{{tailleList}}" data-lineheight="{{interligneList}}" data-weight="{{weightList}}" data-coloration="{{colorList}}" regle-style="displayText">'+
                          '</p>'+
                        '</div>'+
                        '<div class="regles_exists editing_tag">'+
                          '<ul>'+
                            '<li data-ng-repeat="var in tagStyles">'+
                              '<span id="{{var._id}}" class="{{label_action}}">{{var.tagLibelle}} <span translate>modifie</span></span>'+
                              '<a class="set_tag" href="" title="Editer le style" data-ng-click="editionModifierTag(var)" name="set_tag">&nbsp;</a>'+
                              '<a class="delete_tag" href="" title="Supprimer le style" data-ng-click="editionSupprimerTag(var)" name="delete_tag">&nbsp;</a>'+
                            '</li>'+
                          '</ul>'+
                        '</div>'+
                      '</div>'+
                    '</div>'+
                    '<p class="validation_regles">'+
                    '<button type="button" id="editValidationButton" class="btn_simple light_blue" data-ng-click="beforeValidationModif()" translate title="Enregistrer le style">validerLaRegle</button>'+
                    '</p>'+
                  '</div>'+
                '</fieldset>'+
                '<div class="centering" id="ProfileButtons">'+
                  '<button type="button" class="reset_btn" data-ng-click="afficherProfilsClear()" data-dismiss="modal" translate title="Annuler">Annuler</button>'+
                  '<button id="save_editedProfile" type="button" class="btn_simple light_blue editionProfil" data-ng-click="modifierProfil()" data-ng-disabled="checkStyleTag()" translate title="Enregistrer le profil">Enregistrer le profil</button>'+
                '</div>'+
              '</form>'+
            '</div>'+
          '</div>'+
        '</div>'+
        '<!-- /.modal-content -->'+
        '</div><!-- /.modal-dialog -->'+
        '</div><!-- /.modal -->'+
        '<!-- Delete modal declaration !-->'+
        '<div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">'+
          '<div class="modal-dialog">'+
            '<div class="modal-content">'+
              '<div class="modal-header">'+
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'+
                '<h3 class="modal-title" id="myModalLabel" translate>Supprimer le profil</h3>'+
              '</div>'+
              '<div class="modal-body adjust-modal-body">'+
                '<div class="info_txt">'+
                  '<p class="text_left ajustPadding_bottom">'+
                  'Le profil sélectionné va être définitivement supprimé du système. Confirmez-vous cette suppression?'+
                  '</p>'+
                '</div>'+
                '<p class="centering">'+
                '<button type="button" class="reset_btn data-ng-scope" data-dismiss="modal" data-ng-click="afficherProfils()" translate title="Annuler">Annuler</button>'+
                '<button type="button" class="btn_simple light_blue editionProfil data-ng-scope" data-ng-click="supprimerProfil()" data-dismiss="modal" translate title="Supprimer" name="delete_profile_btn">Supprimer</button>'+
                '</p>'+
              '</div>'+
            '</div>'+
            '<!-- /.modal-content -->'+
          '</div>'+
          '<!-- /.modal-dialog -->'+
        '</div>'+
        '<!-- Duplique Favorit Profil Modal declaration !-->'+
        '<div class="modal fade" id="dupliqueFavoritModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false"  >'+
          '<div class="modal-dialog adjustPadding profile_popins" id="edit-Modal" >'+
            '<div class="modal-content" >'+
              '<div class="modal-header">'+
                '<button type="button" class="close" data-ng-click="afficherProfilsClear()" data-dismiss="modal" aria-hidden="true">&times;</button>'+
                '<h3 class="modal-title" id="myModalLabel" translate>Dupliquer le profil</h3>'+
              '</div>'+
              '<div data-ng-show="affichage" class="msg_error">'+
                '<ul data-ng-repeat="error in addFieldError">'+
                  '<li>Le champ <strong>{{error}}</strong> est invalide</li>'+
                '</ul>'+
              '</div>'+
              '<ul data-ng-show="erreurAfficher" class="msg_error">'+
                '<li>Vous devez saisir au moins une <strong>Règle</strong> de style </li>'+
              '</ul>'+
              '<div class="modal-body adjust-modal-body">'+
                '<div class="row-fluid span6" data-ng-form="editionFormValidation">'+
                  '<form class="form-horizontal" role="form" id="editProfile" name="editProfile" novalidate>'+
                    '<fieldset>'+
                      '<span class="group_title">Informations liées au profil <span>(obligatoires)</span></span>'+
                      '<p class="controls_zone pull-left">'+
                      '<label for="nom" class=""><span translate>Nom</span> <span class="required"> *</span></label>'+
                      '<input type="text" class="" data-ng-model="profMod.nom" value="profMod.nom" required>'+
                      '</p>'+
                      '<p class="controls_zone pull-right">'+
                      '<label for="descriptif" class=""><span translate>Descriptif</span> <span class="required"> *</span></label>'+
                      '<input type="text" class="" data-ng-model="profMod.descriptif" value="profMod.descriptif" placeholder="Entrez le descriptif" required>'+
                      '</p>'+
                    '</fieldset>'+
                    '<fieldset>'+
                      '<span class="group_title">Paramètres principaux du profil</span>'+
                      '<div class="regles_area">'+
                        '<div class="regles-head_area">'+
                          '<p class="controls_zone">'+
                          '<label for="tag" class=""><span translate>Regles</span> <span class="required"> *</span></label>'+
                          '<select sselect id="selectIdDuplisuer" class="" data-ng-model="editTag" required>'+
                            '<option data-ng-repeat="tag in listTags" value="{{tag}}" data-ng-disabled="affectDisabled(tag.disabled)">{{tag.libelle}}</option>'+
                          '</select>'+
                          '</p>'+
                          '<div data-ng-hide="hideVar" class="blocker">&nbsp;</div>'+
                        '</div>'+
                        '<div class="regles-body_area">'+
                          '<div class="pull-left">'+
                            '<p class="controls_zone">'+
                            '<label  for="police" class=""><span translate>Police </span><span class="required"> *</span></label>'+
                            '<select sselect class="" data-ng-model="policeList" data-ng-change="dupliqueStyleChange(\'police\', policeList)" required>'+
                              '<option data-ng-repeat="police in policeLists" value="{{police}}" > {{police}}</option>'+
                            '</select>'+
                            '</p>'+
                            '<p class="controls_zone">'+
                            '<label  for="taille" class=""><span translate>Taille </span><span class="required"> *</span></label>'+
                            '<select sselect class="" data-ng-model="tailleList" data-ng-change="dupliqueStyleChange(\'taille\', tailleList)" required>'+
                              '<option data-ng-repeat="taille in tailleLists" value="{{taille.number}}">{{taille.number}}</option>'+
                            '</select>'+
                            '</p>'+
                            '<p class="controls_zone">'+
                            '<label  for="tag" class=""><span translate>Interligne </span><span class="required"> *</span></label>'+
                            '<select sselect class="" data-ng-model="interligneList" data-ng-change="dupliqueStyleChange(\'interligne\', interligneList)" required>'+
                              '<option data-ng-repeat="interligne in interligneLists" value="{{interligne.number}}">{{interligne.number}}</option>'+
                            '</select>'+
                            '</p>'+
                            '<p class="controls_zone">'+
                            '<label for="coloration" class=""><span translate>Coloration </span><span class="required"> *</span> </label>'+
                            '<select sselect class="color-select" data-ng-model="colorList" data-ng-change="dupliqueStyleChange(\'coloration\',colorList)" required >'+
                              '<option data-ng-repeat="color in colorLists" value="{{color}}">{{color}}</option>'+
                            '</select>'+
                            '</p>'+
                            '<p class="controls_zone">'+
                            '<label for="tag" class=""><span >Graisse </span><span class="required"> *</span></label>'+
                            '<select sselect class="" data-ng-model="weightList" data-ng-change="dupliqueStyleChange(\'style\',weightList)" required>'+
                              '<option data-ng-repeat="weight in weightLists" value="{{weight}}">{{weight}}</option>'+
                            '</select>'+
                            '</p>'+
                            '<p class="controls_zone">'+
                            '<label  for="add_space" class=""><span >Espace entre les mots </span><span class="required"> *</span></label>'+
                            '<select sselect class="" data-ng-model="spaceSelected" data-ng-change="dupliqueStyleChange(\'space\', spaceSelected)" required name="space">'+
                              '<option data-ng-repeat="space in spaceLists" value="{{space.number}}">{{space.number}}</option>'+
                            '</select>'+
                            '</p>'+
                            '<p class="controls_zone">'+
                            '<label  for="add_spaceChar" class=""><span >Espace entre les caractères </span><span class="required"> *</span></label>'+
                            '<select sselect class="" data-ng-model="spaceCharSelected" data-ng-change="dupliqueStyleChange(\'spaceChar\', spaceCharSelected)" required name="space">'+
                              '<option data-ng-repeat="spaceChar in spaceCharLists" value="{{spaceChar.number}}">{{spaceChar.number}}</option>'+
                            '</select>'+
                            '</p>'+
                          '</div>'+
                          '<div class="pull-right">'+
                            '<div class="show_zone">'+
                              '<p class="text-center shown-text-duplique" id="style-affected-edit-duplique" data-font="{{policeList}}" data-size="{{tailleList}}" data-lineheight="{{interligneList}}" data-weight="{{weightList}}" data-coloration="{{colorList}}" regle-style="displayText">'+
                              '</p>'+
                            '</div>'+
                            '<div class="regles_exists editing_tag">'+
                              '<ul>'+
                                '<li data-ng-repeat="var in tagStyles">'+
                                  '<span id="{{var._id}}" class="{{label_action}}">{{var.tagLibelle}} <span translate>modifie</span></span>'+
                                  '<a class="set_tag" href="" title="Editer le style" data-ng-click="dupliqueModifierTag(var)" name="set_tag">&nbsp;</a>'+
                                  '<a class="delete_tag" href="" title="Supprimer le style" data-ng-click="editionSupprimerTag(var)" name="delete_tag">&nbsp;</a>'+
                                '</li>'+
                              '</ul>'+
                            '</div>'+
                          '</div>'+
                        '</div>'+
                        '<p class="validation_regles">'+
                        '<button type="button" id="dupliqueValidationButton" class="btn_simple light_blue" data-ng-click="beforeValidationModif()" translate title="{{\'validerLaRegle\' | translate}}">validerLaRegle</button>'+
                        '</p>'+
                      '</div>'+
                    '</fieldset>'+
                    '<div class="centering" id="ProfileButtons">'+
                      '<button type="button" class="reset_btn" data-ng-click="afficherProfilsClear()" data-dismiss="modal" translate title="{{\'Annuler\' | translate}}">Annuler</button>'+
                      '<button type="button" class="btn_simple light_blue dupliqueProfil" data-ng-click="dupliquerFavoritProfil()" data-ng-disabled="checkStyleTag()" translate title="{{\'Enregistrer le profil\' | translate}}" >Enregistrer le profil</button>'+
                    '</div>'+
                  '</form>'+
                '</div>'+
              '</div>'+
            '</div>'+
            '<!-- /.modal-content -->'+
            '</div><!-- /.modal-dialog -->'+
            '</div><!-- /.modal -->'+
            '<!-- Fin Duplique Favorit Profil Modal declaration !-->'+
            '<!-- Debut Delegate Modal declaration !-->'+
            '<div class="modal fade" id="delegateModal" tabindex="-1" role="dialog" aria-labelledby="delegateModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false" >'+
              '<div class="modal-dialog" id="modalContent">'+
                '<div class="modal-content">'+
                  '<div class="modal-header">'+
                    '<button type="button" class="close" data-ng-click="afficherProfilsParUser()" data-dismiss="modal" aria-hidden="true">&times;</button>'+
                    '<h3 class="modal-title" id="delegateModalLabel">Déléguer un profil</h3>'+
                  '</div>'+
                  '<div data-ng-show="errorMsg" class="msg_error">'+
                    '{{errorMsg}}'+
                  '</div>'+
                  '<div class="modal-body adjust-modal-body">'+
                    '<div class="row-fluid span6">'+
                      '<div class="tab-content">'+
                        '<div class="tab-pane active" id="document" data-ng-form="delegateformValidation" >'+
                          '<form class="form-horizontal" role="form" id="delegate" name="delegate">'+
                            '<fieldset class="padding_large" data-ng-show="!successMsg">'+
                              '<p class="controls_zone">'+
                              '<label for="delegateEmail" class="simple_label"><span>Email :</span> <span class="required"> *</span></label>'+
                              '<input type="text" class="" id="delegateEmail" placeholder="Entrer l\'email du destinataire" data-ng-model="delegateEmail" required>'+
                              '</p>'+
                            '</fieldset>'+
                            '<div class="centering" id="ProfileButtons">'+
                              '<button type="button" class="reset_btn" data-dismiss="modal" data-ng-click="afficherProfilsParUser()" title="Annuler">Annuler</button>'+
                              '<button type="button" class="btn_simple light_blue" data-ng-click="deleguerProfil()" title="Envoyer">Envoyer</button>'+
                            '</div>'+
                          '</form>'+
                        '</div>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<!-- /.modal-content -->'+
                '</div>'+
                '<!-- /.modal-dialog -->'+
                '</div><!-- /.modal -->'+
              '</div>'+
              '<!-- Fin Delegate Modal declaration !-->'+
              '<!-- Debut Retirer Delegate Modal declaration !-->'+
              '<div class="modal fade" id="retirerDelegateModal" tabindex="-1" role="dialog" aria-labelledby="delegateModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false" >'+
                '<div class="modal-dialog" id="modalContent">'+
                  '<div class="modal-content">'+
                    '<div class="modal-header">'+
                      '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'+
                      '<h3 class="modal-title" id="retireDelegateModalLabel">Retirer la délégation</h3>'+
                    '</div>'+
                    '<div class="modal-body adjust-modal-body">'+
                      '<div class="row-fluid span6">'+
                        '<div class="tab-content">'+
                          '<div class="tab-pane active" id="document" data-ng-form="delegateformValidation" >'+
                            '<form class="form-horizontal" role="form" id="retireDelegate" name="retireDelegate">'+
                              '<p>Voulez-vous retirer votre délégation?</p>'+
                              '<div class="centering" id="ProfileButtons">'+
                                '<button type="button" class="reset_btn" data-dismiss="modal" title="Annuler">Annuler</button>'+
                                '<button type="button" class="btn_simple light_blue" data-dismiss="modal" data-ng-click="retireDeleguerProfil()" title="Oui">Oui</button>'+
                              '</div>'+
                            '</form>'+
                          '</div>'+
                        '</div>'+
                      '</div>'+
                    '</div>'+
                    '<!-- /.modal-content -->'+
                  '</div>'+
                  '<!-- /.modal-dialog -->'+
                  '</div><!-- /.modal -->'+
                '</div>'+
                '<!-- Fin Retirer Delegate Modal declaration !-->'+
                '<!-- Debut Annuler Delegate Modal declaration !-->'+
                '<div class="modal fade" id="annulerDelegateModal" tabindex="-1" role="dialog" aria-labelledby="delegateModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false" >'+
                  '<div class="modal-dialog" id="modalContent">'+
                    '<div class="modal-content">'+
                      '<div class="modal-header">'+
                        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'+
                        '<h3 class="modal-title" id="annuleDelegateModalLabel">Annuler la délégation</h3>'+
                      '</div>'+
                      '<div class="modal-body adjust-modal-body">'+
                        '<div class="row-fluid span6">'+
                          '<div class="tab-content">'+
                            '<div class="tab-pane active" id="document" data-ng-form="annuleformValidation" >'+
                              '<form class="form-horizontal" role="form" id="annuleDelegate" name="retireDelegate">'+
                                '<p>Voulez-vous annuler votre délégation?</p>'+
                                '<div class="centering" id="ProfileButtons">'+
                                  '<button type="button" class="reset_btn" data-dismiss="modal" title="Annuler">Annuler</button>'+
                                  '<button type="button" class="btn_simple light_blue" data-dismiss="modal" data-ng-click="annuleDeleguerProfil()" title="Oui">Oui</button>'+
                                '</div>'+
                              '</form>'+
                            '</div>'+
                          '</div>'+
                        '</div>'+
                      '</div>'+
                      '<!-- /.modal-content -->'+
                    '</div>'+
                    '<!-- /.modal-dialog -->'+
                    '</div><!-- /.modal -->'+
                  '</div>'+
                  '<!-- Fin Annuler Delegate Modal declaration !-->'+
                  '<div class="modal fade" id="deleteFavouriteModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">'+
                    '<div class="modal-dialog">'+
                      '<div class="modal-content">'+
                        '<div class="modal-header">'+
                          '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'+
                          '<h3 class="modal-title" id="myModalLabel" translate>deleteFavoris</h3>'+
                        '</div>'+
                        '<div class="modal-body adjust-modal-body">'+
                          '<p translate>  messageSuppression</p>'+
                          '<p class="centering">'+
                          '<button type="button" class="reset_btn data-ng-scope" data-dismiss="modal" data-ng-click="afficherProfils()" translate title="Annuler">Annuler</button>'+
                          '<button type="button" class="btn_simple light_blue editionProfil data-ng-scope" data-ng-click="removeFavourite()" data-dismiss="modal" translate title="Supprimer">Supprimer</button>'+
                          '</p>'+
                        '</div>'+
                      '</div>'+
                      '<!-- /.modal-content -->'+
                    '</div>'+
                    '<!-- /.modal-dialog -->'+
                  '</div>'+
                  '<!-- /.modal -->'+
                  '<div class="modal fade" id="shareModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">'+
                    '<div class="modal-dialog">'+
                      '<div class="modal-content">'+
                        '<div class="modal-header">'+
                          '<button type="button" class="close" data-ng-click="clearSocialShare()" data-dismiss="modal" aria-hidden="true">&times;</button>'+
                          '<h3 class="modal-title" id="myModalLabel">Partager ce profil</h3>'+
                        '</div>'+
                        '<div class="modal-body">'+
                          '<h2><span>Sélectionner un moyen pour partager ce profil</span></h2>'+
                          '<div class="msg_error" id="erreurEmail" style="display:none;">'+
                            'Email incorrect !'+
                          '</div>'+ // envoiUrl
                          '<div class="share_btn_container">'+
                          '<ul>'+
                          '<li><a href="" class="share_btn mail_share" data-ng-click="loadMail()" title="Email" id="document_share"></a><span class="share-text">Par Email</span></li>'+
                          '<li class="facebook-share"><span class="share-text">Sur Facebook</span></li>'+
                          '<li><a class="share_link share_btn twitter_share" href="https://twitter.com/share?url={{envoiUrl}}&via=CnedAdapt&text=Un élément a été partagé via l\'outil CnedAdapt"'+
                          'onclick="javascript:window.open(this.href, \'\', \'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600\');return false;"'+
                          'target="_blank" title="Partager sur Twitter">'+
                          '</a><span class="share-text">Sur Twitter</span></li>'+
                          '<li class="google-share"><a class="share_link share_btn gplus_share" href="https://plus.google.com/share?url={{envoiUrl}}"'+
                          'onclick="javascript:window.open(this.href, \'\', \'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=350,width=480\');return false;"'+
                          'target="_blank" title="Partager sur Google+">'+
                          '</a><span class="share-text">Sur Google+</span></li>'+
                          '</ul></div>'+ 
                          '<div class="control_group" data-ng-show="displayDestination">'+
                            '<h2>adresse email <br><span>Saisissez l’adresse email du destinataire</span></h2>'+
                            '<p class="mail_area">'+
                            '<label for="destinataire" class="email" id="label_email_etap-one">Email</label>'+
                            '<input type="email" class="" data-ng-model="destinataire" id="destinataire" placeholder="" />'+
                            '</p>'+
                          '</div>'+
                          '<div class="centering" id="ProfileButtons">'+
                            '<button id="reset_shareprofile_btn" type="button" class="reset_btn" data-ng-click="clearSocialShare()" data-dismiss="modal" title="Annuler">Annuler</button>'+
                            '<button id="shareprofile_btn" type="button" class="btn_simple light_blue" data-ng-show="displayDestination" data-ng-click="socialShare()" title="Partager">Partager</button>'+
                          '</div>'+
                        '</div>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class="modal fade" id="confirmModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false" >'+
                    '<div class="modal-dialog" id="modalContent">'+
                      '<div class="modal-content">'+
                        '<div class="modal-header">'+
                          '<button type="button" class="close" data-ng-click="" data-dismiss="modal" aria-hidden="true">&times;</button>'+
                          '<h3 class="modal-title" id="myModalLabel">Confirmation d\'envoi</h3>'+
                        '</div>'+
                        '<div class="modal-body adjust-modal-body">'+
                          '<div class="info_txt">'+
                            '<p class="text_left ajustPadding_bottom">'+
                            'Voulez vous envoyer cet email ?'+
                            '</p>'+
                          '</div>'+
                        '</div>'+
                        '<div class="centering" id="confirmationButtons">'+
                          '<button id="restSend_mail_btn" type="button" data-ng-click=\'clearSocialShare()\' class="reset_btn" data-dismiss="modal" title="Annuler">Annuler</button>'+
                          '<button id="send_mail_btn" type="button" class="btn_simple light_blue" data-ng-click=\'sendMail()\' title="Envoyer">Envoyer</button>'+
                        '</div>'+
                        '<!-- /.modal-content -->'+
                      '</div>'+
                      '<!-- /.modal-dialog -->'+
                      '</div><!-- /.modal -->'+
                    '</div>'+
                  '</div>'+
                  '<div class="fixed_loader" data-ng-show="loader">'+
                    '<div class="loadre_container">'+
                      '<p class="loader_txt">{{loaderMsg}}</p>'+
                    '</div>'+
                  '</div></div>';
