import 'dart:core';

class Staff {
  int? id;
  String? code;
  String? firstname;
  String? lastname;
  int? department;
  bool? isManager;
  DateTime? joinedAt;
  DateTime? offDate;
  DateTime? dob;
  int? gender;
  int? regional;
  String? phoneNumber;
  String? email;
  String? password;
  String? idNumber;
  DateTime? identity_issue_date;
  String? photo;
  String? idPhoto;
  String? idPhotoBack;
  double? dayOfLeave;
  String? note;
  DateTime? createdAt;
  int? createdBy;
  DateTime? updatedAt;
  int? updatedBy;
  bool? status;

  Staff({
    this.id,
    this.code,
    this.firstname,
    this.lastname,
    this.department,
    this.isManager,
    this.joinedAt,
    this.offDate,
    this.dob,
    this.gender,
    this.regional,
    this.phoneNumber,
    this.email,
    this.password,
    this.idNumber,
    this.identity_issue_date,
    this.photo,
    this.idPhoto,
    this.idPhotoBack,
    this.dayOfLeave,
    this.note,
    this.createdAt,
    this.createdBy,
    this.updatedAt,
    this.updatedBy,
    this.status,
  });

  factory Staff.fromMap(Map<String, dynamic> json) {
    return Staff(
      id: json['id'],
      code: json['code'],
      firstname: json['firstname'],
      lastname: json['lastname'],
      department: json['department'],
      isManager: json['isManager'],
      joinedAt: json['joinedAt'] != null
          ? DateTime.fromMillisecondsSinceEpoch(json['joinedAt'])
          : null,
      offDate: json['offDate'] != null
          ? DateTime.fromMillisecondsSinceEpoch(json['offDate'])
          : null,
      dob: json['dob'] != null
          ? DateTime.fromMillisecondsSinceEpoch(json['dob'])
          : null,
      gender: json['gender'],
      regional: json['regional'],
      phoneNumber: json['phoneNumber'],
      email: json['email'],
      password: json['password'],
      idNumber: json['idNumber'],
      identity_issue_date: json['identity_issue_date'] != null
          ? DateTime.fromMillisecondsSinceEpoch(json['identity_issue_date'])
          : null,
      photo: json['photo'],
      idPhoto: json['idPhoto'],
      idPhotoBack: json['idPhotoBack'],
      dayOfLeave: json['dayOfLeave'],
      note: json['note'],
      createdAt: json['createdAt'] != null
          ? DateTime.fromMillisecondsSinceEpoch(json['createdAt'])
          : null,
      createdBy: json['createdBy'],
      updatedAt: json['updatedAt'] != null
          ? DateTime.fromMillisecondsSinceEpoch(json['updatedAt'])
          : null,
      updatedBy: json['updatedBy'],
      status: json['status'],
    );
  }

  Map<String, dynamic> toMap() {
    return {
      "id": id,
      "code": code,
      "firstname": firstname,
      "lastname": lastname,
      "department": department,
      "isManager": isManager,
      "joinedAt": joinedAt?.toIso8601String(),
      "offDate": offDate?.toIso8601String(),
      "dob": dob?.toIso8601String(),
      "gender": gender,
      "regional": regional,
      "phoneNumber": phoneNumber,
      "email": email,
      "password": password,
      "idNumber": idNumber,
      "identity_issue_date": identity_issue_date?.toIso8601String(),
      "photo": photo,
      "idPhoto": idPhoto,
      "idPhotoBack": idPhotoBack,
      "dayOfLeave": dayOfLeave,
      "note": note,
      "createdAt": createdAt?.toIso8601String(),
      "createdBy": createdBy,
      "updatedAt": updatedAt?.toIso8601String(),
      "updatedBy": updatedBy,
      "status": status,
    };
  }
}
