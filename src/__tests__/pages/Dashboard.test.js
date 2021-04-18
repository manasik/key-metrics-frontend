import {useMetrics} from "../../api/hooks/useMetrics";
import {mocked} from "ts-jest/utils";
import {render, screen} from "@testing-library/react";
import Dashboard from "../../pages/Dashboard";
import React from "react";

jest.mock('../../api/hooks/useMetrics')
const mockedUseMetrics = mocked(useMetrics)

describe("dashboard", () => {

    const leadTimeForChange = [{"deployedAt": "2021-02-14", "numberOfDays": 2.3},
                               {"deployedAt": "2021-02-10", "numberOfDays": 0.0}]

    const deployments = [{"deployedAt": "2021-02-14", "buildVersion": "b131"},
        { "deployedAt": "2021-02-17", "buildVersion": "b131"},
        { "deployedAt": "2021-02-12", "buildVersion": "b128"},
        { "deployedAt": "2021-02-14", "buildVersion": "b128"}]

    const metrics = {
        serviceName: "blah",
        leadTimeForChange: leadTimeForChange,
        deployments: deployments
    }

    beforeEach(() => {
        mockedUseMetrics.mockReturnValue(metrics)
    })

    it('should have date on x axis when present', () => {
        render(<Dashboard/>)
        screen.getByText('2021-02-14')
        screen.getByText('2021-02-10')
    })

    it('should display empty graph when no data present', () => {
        mockedUseMetrics.mockReturnValue({
                serviceName: "blah",
                leadTimeForChange: [],
                deployments: []
            }
        )
        render(<Dashboard/>)
        screen.getByTestId('leadTimeForChange')
    })
})
