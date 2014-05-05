/* File: detailProfil.js
 *
 * Copyright (c) 2014
 * Centre National d’Enseignement à Distance (Cned), Boulevard Nicephore Niepce, 86360 CHASSENEUIL-DU-POITOU, France
 * (direction-innovation@cned.fr)
 *
 * GNU Affero General Public License (AGPL) version 3.0 or later version
 *
 * This file is part of a program which is free software: you can
 * redistribute it and/or modify it under the terms of the
 * GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public
 * License along with this program.
 * If not, see <http://www.gnu.org/licenses/>.
 *
 */

 'use strict';

 describe('Controller:detailProfilCtrl', function() {
  var $scope, controller;

  var profils = [{
    _id: '52d8f876548367ee2d000004',
    photo: './files/profilImage.jpg',
    descriptif: 'descriptif',
    nom: 'Nom'
  }, {
    _id: '52d8f928548367ee2d000006',
    photo: './files/profilImage.jpg',
    descriptif: 'descriptif2',
    nom: 'Nom2'
  }];

  var profilTag = {
    _id: '52d8f928548367ee2d000006',
    tag: 'tag',
    texte: 'texte',
    profil: 'profil',
    tagName: 'tagName',
    police: 'Arial',
    taille: 'eight',
    interligne: 'fourteen',
    styleValue: 'Bold'
  };

  beforeEach(module('cnedApp'));

  beforeEach(inject(function($controller, $rootScope, $httpBackend, configuration) {
    $scope = $rootScope.$new();
    controller = $controller('detailProfilCtrl', {
      $scope: $scope
    });
    $httpBackend.whenPOST(configuration.URL_REQUEST + '/chercherProfil').respond(profils);
    $httpBackend.whenPOST(configuration.URL_REQUEST + '/chercherTagsParProfil').respond(profils);
    $httpBackend.whenGET(configuration.URL_REQUEST + '/profile').respond(profils);
    $httpBackend.whenPOST(configuration.URL_REQUEST + '/chercherProfilParDefaut').respond(profils);
    $httpBackend.whenPOST(configuration.URL_REQUEST + '/sendMail').respond(profils);
    $httpBackend.whenPOST(configuration.URL_REQUEST + '/addUserProfilFavoris').respond(profils);
    $httpBackend.whenPOST(configuration.URL_REQUEST + '/chercherProfil').respond(profils);
    $httpBackend.whenGET(configuration.URL_REQUEST + '/readTags?').respond(profils);
    $httpBackend.whenGET(configuration.URL_REQUEST + '/readTags').respond(profils);
    $httpBackend.whenPOST(configuration.URL_REQUEST + '/ajouterProfilTag').respond(profilTag);

    $rootScope.currentUser = {
      __v: 0,
      _id: '5329acd20c5ebdb429b2ec66',
      dropbox: {
        accessToken: 'PBy0CqYP99QAAAAAAAAAATlYTo0pN03u9voi8hWiOY6raNIH-OCAtzhh2O5UNGQn',
        country: 'MA',
        display_name: 'youbi anas', // jshint ignore:line
        emails: 'anasyoubi@gmail.com',
        referral_link: 'https://db.tt/wW61wr2c', // jshint ignore:line
        uid: '264998156'
      },
      local: {
        email: 'anasyoubi@gmail.com',
        nom: 'youbi',
        password: '$2a$08$xo/zX2ZRZL8g0EnGcuTSYu8D5c58hFFVXymf.mR.UwlnCPp/zpq3S',
        prenom: 'anas',
        role: 'admin',
        restoreSecret: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjaGFpbmUiOiJ0dHdocjUyOSJ9.0gZcerw038LRGDo3p-XkbMJwUt_JoX_yk2Bgc0NU4Vs",
        secretTime: "201431340",
        token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjaGFpbmUiOiI5dW5nc3l2aSJ9.yG5kCziw7xMLa9_6fzlJpQnX6PSURyX8CGlZeDTW8Ec",
        tokenTime: 1397469765520
      },
      loged: true,
      dropboxWarning: true,
      admin: true
    };

    $scope.profil = {
      _id: '52d8f928548367ee2d000006',
      photo: './files/profilImage.jpg',
      descriptif: 'descriptif3',
      nom: 'Nom3'
    };

    $scope.tagStyles = [{
      tag: '52c6cde4f6f46c5a5a000004',
      interligne: 'ten',
      label: 'titre',
      police: 'Arial',
      style: '',
      styleValue: 'Bold',
      taille: 'twelve',
      state: true

    }, {
      tag: '52c6cde4f6f46c5a5a000008',
      interligne: 'ten',
      label: 'titre',
      police: 'Arial',
      style: '',
      styleValue: 'Bold',
      taille: 'twelve',
      state: true
    }];

    $scope.listTags = [{
      _id: '52c6cde4f6f46c5a5a000004',
      libelle: 'Exercice',
      disabled: true
    }, {
      _id: '52c6cde4f6f46c5a5a000006',
      libelle: 'Exercice',
      disabled: false
    }];
    $scope.currentTagEdit = {
      'libelle': 'Exercice',
      '_id': '52e8c721c32a9a0d1b885b0f',
      '__v': 0
    };


  }));

/* TagCtrl:afficherTag */

it('TagCtrl:detailProfil should set detailProfil function', inject(function($httpBackend , $location) {
  expect($scope.initial).toBeDefined();
  $scope.initial();
  $httpBackend.flush();
  expect($scope.profil).toBe(profils);
  expect($scope.tagsByProfils).toBe(profils);
  expect($scope.tagsByProfils.length).toBe(profils.length);
  expect($scope.chercherProfilParDefautFlag).toBe(profils);
  expect($scope.chercherProfilParDefautFlag.length).toBe(profils.length);
  expect(localStorage.getItem('listTagsByProfil')).toBe(JSON.stringify(profils));
  expect($scope.listTags.length).toBe(profils.length);
  expect($scope.profileFlag).toBe(profils);


}));

it('TagCtrl:loadMail should set loadMail function', inject(function($httpBackend) {
  $scope.loadMail();
  expect($scope.displayDestination).toBeTruthy();

}));

it('TagCtrl:verifyEmail should set verifyEmail function', inject(function($httpBackend) {
  $scope.verifyEmail('test@test.com');
  expect($scope.verifyEmail('test@test.com')).toBeTruthy();
}));

it('TagCtrl:socialShare should set socialShare function', inject(function($httpBackend) {
  $scope.socialShare();
}));

it('TagCtrl:ajouterAmesFavoris should set ajouterAmesFavoris function', inject(function($httpBackend) {
  $scope.ajouterAmesFavoris();
  $httpBackend.flush();
  expect($scope.favourite).toBe(profils);
}));

it('TagCtrl:afficherDupliquerProfil should set afficherDupliquerProfil function', inject(function($httpBackend) {
  $scope.afficherDupliquerProfil();
  expect($scope.afficherDupliquerProfil).toBeTruthy();
}));

it('ProfilesCtrl:editerStyleTag should set editerStyleTag ', inject(function() {
  expect($scope.editerStyleTag).toBeDefined();
  expect($scope.listTags[0].disabled).toBeTruthy();
  expect($scope.tagStyles.length).toBe(2);
}));
it('ProfilesCtrl:editerStyleTag should set editerStyleTag ', inject(function() {
  $scope.currentTagProfil = null;
  $scope.editTag = '{"libelle":"Exercice","_id":"52e8c721c32a9a0d1b885b0f","__v":0}';
    // expect($scope.currentTagEdit).toEqual(JSON.parse($scope.editTag));

    expect($scope.editerStyleTag).toBeDefined();
    expect($scope.listTags[0].disabled).toBeTruthy();
    expect($scope.tagStyles.length).toBe(2);
  }));
it('ProfilesCtrl:editerStyleTag() should be inside !$scope.currentTagProfil condition', inject(function() {
  $scope.currentTagProfil = null;
  $scope.editTag = '{"_id":"52c6cde4f6f46c5a5a000004","libelle":"Exercice","disabled":true}';
  expect($scope.editerStyleTag).toBeDefined();
  $scope.editerStyleTag();
  expect($scope.currentTagProfil).toBe(null);

  $scope.parsedVar = {
    _id: '52c6cde4f6f46c5a5a000004',
    libelle: 'Exercice',
    disabled: true
  };

  expect($scope.currentTagEdit).toEqual($scope.parsedVar);
  expect($scope.listTags[0]._id).toEqual($scope.currentTagEdit._id);
  expect($scope.listTags[0].disabled).toBeTruthy();
  expect($scope.tagStyles.length).toBeGreaterThan(0);
}));
it('ProfilesCtrl:editerStyleTag() should be inside !$scope.currentTagProfil.state condition', inject(function() {
  $scope.currentTagProfil = {
    state: false
  };
  $scope.editerStyleTag();

  expect($scope.currentTagProfil).toBe(null);
  expect($scope.noStateVariableFlag).toBeTruthy();

}));
it('ProfilesCtrl:editerStyleTag() should be inside $scope.currentTagProfil.state condition', inject(function() {
  $scope.currentTagProfil = {
    state: true
  };
  $scope.editerStyleTag();

  expect($scope.currentTagProfil).toBe(null);

}));

it('ProfilesCtrl:afficherProfilsClear should listeProfils be profils', inject(function($httpBackend) {
  $scope.afficherProfilsClear();
}));
it('ProfilesCtrl:checkStyleTag should checkStyleTag', inject(function($httpBackend) {
  $scope.tagStyles.push('element');
  $scope.checkStyleTag();
  expect($scope.checkStyleTag()).toBeFalsy();
}));
it('ProfilesCtrl:beforeValidationModif()', inject(function() {
  expect($scope.beforeValidationModif).toBeDefined();
  $scope.profMod = $scope.profil;
  $scope.beforeValidationModif();
  $scope.editList = null;
  $scope.policeList = null;
  $scope.tailleList = null;
  $scope.interligneList = null;
  $scope.colorList = null;
  $scope.weightList = null;

  expect($scope.addFieldError[0]).toBe(' Règle ');
  expect($scope.addFieldError[1]).toBe(' Police ');
  expect($scope.editList).toBe(null);
  expect($scope.addFieldError[2]).toBe(' Taille ');
  expect($scope.policeList).toBe(null);
  expect($scope.addFieldError[3]).toBe(' Interligne ');
  expect($scope.tailleList).toBe(null);
  expect($scope.addFieldError[4]).toBe(' Coloration ');
  expect($scope.interligneList).toBe(null);
}));

it('ProfilesCtrl:editionSupprimerTag should set editionSupprimerTag ', inject(function() {
  expect($scope.editionSupprimerTag).toBeDefined();
  $scope.parameter = {
    tag: '52c6cde4f6f46c5a5a000004',
    interligne: 'ten',
    label: 'titre',
    police: 'Arial',
    style: '',
    styleValue: 'Bold',
    taille: 'twelve',
    state: true
  };
  $scope.editionSupprimerTag($scope.parameter);
  expect($scope.tagStyles.indexOf($scope.parameter)).toBe(-1);
  expect($scope.tagStyles.length).toBe(2);
  expect($scope.listTags[1].disabled).toBeFalsy();
  expect($scope.trashFlag).toBeFalsy();
  expect($scope.currentTagProfil).toBe(null);

  $scope.parameter = {
    tag: '52c6cde4f6f46c5a5a000004',
    interligne: 'ten',
    label: 'titre',
    police: 'Arial',
    style: '',
    styleValue: 'Bold',
    taille: 'twelve',
    state: true
  };
  $scope.editionSupprimerTag($scope.parameter);
  expect($scope.parameter.state).toBeTruthy();
  expect($scope.parameter.tag).toEqual($scope.listTags[0]._id);
  expect($scope.listTags[0].disabled).toBeFalsy();
  expect($scope.currentTagProfil).toBe(null);
  expect($scope.policeList).toBe(null);
  expect($scope.tailleList).toBe(null);
  expect($scope.interligneList).toBe(null);
  expect($scope.colorList).toBe(null);
  expect($scope.weightList).toBe(null);

  $scope.parameter = {
    tag: '52c6cde4f6f46c5a5a000006',
    interligne: 'ten',
    label: 'titre',
    police: 'Arial',
    style: '',
    styleValue: 'Bold',
    taille: 'twelve',
    state: false
  };
  $scope.editionSupprimerTag($scope.parameter);
  expect($scope.parameter.tag).toEqual($scope.listTags[1]._id);
  expect($scope.listTags[1].disabled).toBeFalsy();

}));


it('listDocumentCtrl:sendMail function', inject(function($httpBackend, $rootScope, configuration) {
  $scope.destination = 'test@test.com';
  $scope.destinataire = 'test@test.com';
  $scope.sendMail();

  expect($scope.verifyEmail($scope.destination)).toBeTruthy();
  expect($scope.destination.length).not.toBe(null);
  expect($rootScope.currentUser.dropbox.accessToken).not.toBe(null);
  expect(configuration.DROPBOX_TYPE).toBeTruthy();
  expect($rootScope.currentUser).not.toBe(null);

  $scope.sendVar = {
    to: $scope.destinataire,
    content: ' a utilisé cnedAdapt pour partager un fichier avec vous !  ',
    encoded: '<span> vient d\'utiliser cnedAdapt pour partager un fichier avec vous !',
    prenom: $rootScope.currentUser.local.prenom,
    fullName: $rootScope.currentUser.local.prenom + ' ' + $rootScope.currentUser.local.nom,
    doc: 'doc'
  };
  $httpBackend.flush();

  expect($scope.sent).toBe(profils);


}));

it('listDocumentCtrl:affectDisabled function', inject(function($httpBackend, $rootScope, configuration) {
  expect($scope.affectDisabled('param')).toBeTruthy();
}));

it('listDocumentCtrl:afficherTags function', inject(function($httpBackend, $rootScope, configuration) {
  expect($scope.affectDisabled('param')).toBeTruthy();
}));

it('ProfilesCtrl:afficherTags should listTags be tags', inject(function($httpBackend) {
  $scope.afficherTags();
  expect($scope.listTags.length).toBe(2);
  expect($scope.tagStyles[0].tag).toBe($scope.listTags[0]._id);
  expect($scope.listTags[0].disabled).toBeTruthy();
  $httpBackend.flush();
}));

it('ProfilesCtrl:preModifierProfil should set preModifierProfil ', inject(function($httpBackend) {
  var tags = [{
    _id: '52c6cde4f6f46c5a5a000004',
    libelle: 'Exercice'
  }, {
    _id: '52c588a861485ed41c000002',
    libelle: 'Cours'
  }];
  $scope.preModifierProfil($scope.profil);
  $scope.profMod = $scope.profil;
  $scope.token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjaGFpbmUiOiI5dW5nc3l2aSJ9.yG5kCziw7xMLa9_6fzlJpQnX6PSURyX8CGlZeDTW8Ec";
  $httpBackend.flush();
  expect($scope.tagStylesFlag.length).toEqual(tags.length);
}));
it('detailProfilCtrl:modifierProfil should set modifierProfil ', inject(function($httpBackend) {
  var tags = [{
    _id: '52c6cde4f6f46c5a5a000004',
    libelle: 'Exercice'
  }, {
    _id: '52c588a861485ed41c000002',
    libelle: 'Cours'
  }];
  $scope.profMod = $scope.profil;
  $scope.token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjaGFpbmUiOiI5dW5nc3l2aSJ9.yG5kCziw7xMLa9_6fzlJpQnX6PSURyX8CGlZeDTW8Ec";
  $scope.modifierProfil();

}));

it('detailProfilCtrl:editionModifierTag()', inject(function() {
  expect($scope.editionModifierTag).toBeDefined();
  $scope.editionModifierTag($scope.tagStyles[0]);
  expect($scope.currentTagProfil).toBe($scope.tagStyles[0]);
  expect($scope.listTags.disabled).toBeFalsy();
  expect($scope.policeList).toBe($scope.tagStyles[0].police);
  expect($scope.tailleList).toBe($scope.tagStyles[0].taille);
  expect($scope.interligneList).toBe($scope.tagStyles[0].interligne);
  expect($scope.weightList).toBe($scope.tagStyles[0].styleValue);
  expect($scope.colorList).toBe($scope.tagStyles[0].coloration);
  $scope.editStyleChange('police', $scope.policeList);
  $scope.editStyleChange('taille', $scope.tailleList);
  $scope.editStyleChange('interligne', $scope.interligneList);
  $scope.editStyleChange('style', $scope.weightList);
  $scope.editStyleChange('coloration', $scope.colorList);


}));



});