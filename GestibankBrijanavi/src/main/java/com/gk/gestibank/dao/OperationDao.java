package com.gk.gestibank.dao;

import java.util.List;

import com.gk.gestibank.model.Operation;

public interface OperationDao {
	List<Operation> getByCompte(int compteId);
}
