/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.demo.services;

import com.example.demo.entities.CheckInOut;

import java.util.ArrayList;

/**
 * @author Red
 */
public interface CheckInOutService {
    void save(CheckInOut check);

    boolean checkCheckIn(int staff_id, String check_in_day);

    int checkCheckIn2(int staff_id, String check_in_day);

    boolean checkCheckInLeaveOther(Integer staff_id, String from_date, String to_date);

    ArrayList<Object> getStaffTime(int staff_id, String y_m);
}
