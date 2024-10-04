import type {
  ESourceTypeNotification,
  EReceiverType,
  ENotificationSource,
} from "./constant";

declare module QuanLyThongTinVaDichVu {
  export interface IRecord {
    _id: string;
    idPhong: {
      _id: string;
      soPhong: string;
      loaiPhong: string;
      soNguoiToiDa: number;
      donGia: number;
    };
    idSinhVien: {
      _id: string;
      username: string;
      password: string;
      hoDem: string;
      ten: string;
      cmtCccd: string;
      ngaySinh: string;
      lop: string;
      queQuan: string;
      systemRole: string;
      authorizationVersion: {
        props: [];
        version: number;
        _id: string;
      };
    };
    idDichVu: {
      _id: string;
      maDichVu: string;
      tenDichVu: string;
      thoiGianSuDung: number;s
      donGia: number;
      __v: 0;
    };
    thoiGianBatDauSuDung: string;
    thoiGianKetThucSuDung: string;
    donGia: number;
    createdAt: string;
    updatedAt: string;
    __v: 0;
  }

  export type TNotificationSource = {
    entityId?: string;
    entitySource?: ENotificationSource;
    pathWeb?: string;
    phanHe?: ESourceTypeNotification;
  } & Record<string, any>;
}
