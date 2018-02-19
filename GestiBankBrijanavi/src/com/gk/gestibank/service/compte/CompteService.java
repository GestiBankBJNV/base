package com.gk.gestibank.service.compte;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gk.gestibank.dao.CompteDao;
import com.gk.gestibank.dao.OperationDao;
import com.gk.gestibank.model.Compte;
import com.gk.gestibank.model.CompteEpargne;
import com.gk.gestibank.model.Operation;

@Service
public class CompteService implements ICompteService {
	
	@Autowired
	private CompteDao compteDao;
	
	@Autowired
	private OperationDao operationDao;
	
	@Override
	public List<Compte> getByClient(int clientId){
		return compteDao.getByClient(clientId);
	}
	
	@Override
	public List<Operation> getOperationsByCompte(int compteId){
		return operationDao.getByCompte(compteId);
	}
}
