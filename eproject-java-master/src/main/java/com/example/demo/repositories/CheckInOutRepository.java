/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.demo.repositories;

import com.example.demo.entities.CheckInOut;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;
import java.util.Date;
import java.util.Map;

/**
 * @author Red
 */
public interface CheckInOutRepository extends CrudRepository<CheckInOut, Integer> {
    @Query(value = "SELECT o FROM CheckInOut o WHERE o.staffId = ?1 and o.checkInDay = ?2")
    CheckInOut checkCheckIn(Integer staff_id, Date check_in_day);

    @Query(value = "SELECT * FROM check_in_out WHERE staff_id = ?1 and check_in_day BETWEEN ?2 AND ?3 GROUP BY staff_id", nativeQuery = true)
    CheckInOut checkCheckInLeaveOther(Integer staff_id, Date from_date, Date to_date);

    @Query(value = "CALL GetStaffTime(?1, ?2);", nativeQuery = true)
    ArrayList<Map<String, Object>> GetStaffTime(Integer staff_id, Date month_get);
}
